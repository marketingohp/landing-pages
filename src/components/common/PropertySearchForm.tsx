"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Box } from "@mui/material";
import { submitFormLead } from "@/lib/api";
import { reportConversion, pushToDataLayer } from "@/utils/gtag";
import { DEVELOPERS_MAP, LOCATIONS_MAP } from '../../data/crmIds.js'

// react-phone-number-input import
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import PhoneNumberInput from "./PhoneNumberInput";

const countryCodes = [
  { value: "+971", label: "+971" },
  { value: "+91", label: "+91" },
  { value: "+1", label: "+1" },
  { value: "+7", label: "+7" },
  { value: "+20", label: "+20" },
  { value: "+27", label: "+27" },
  { value: "+30", label: "+30" },
  { value: "+31", label: "+31" },
  { value: "+32", label: "+32" },
  { value: "+33", label: "+33" },
  { value: "+34", label: "+34" },
  { value: "+36", label: "+36" },
  { value: "+39", label: "+39" },
  { value: "+40", label: "+40" },
  { value: "+41", label: "+41" },
  { value: "+43", label: "+43" },
  { value: "+44", label: "+44" },
  { value: "+45", label: "+45" },
  { value: "+46", label: "+46" },
  { value: "+47", label: "+47" },
  { value: "+48", label: "+48" },
  { value: "+49", label: "+49" },
  { value: "+51", label: "+51" },
  { value: "+52", label: "+52" },
  { value: "+53", label: "+53" },
  { value: "+54", label: "+54" },
  { value: "+55", label: "+55" },
  { value: "+56", label: "+56" },
  { value: "+57", label: "+57" },
  { value: "+58", label: "+58" },
  { value: "+60", label: "+60" },
  { value: "+61", label: "+61" },
  { value: "+62", label: "+62" },
  { value: "+63", label: "+63" },
  { value: "+64", label: "+64" },
  { value: "+65", label: "+65" },
  { value: "+66", label: "+66" },
  { value: "+81", label: "+81" },
  { value: "+82", label: "+82" },
  { value: "+84", label: "+84" },
  { value: "+86", label: "+86" },
  { value: "+90", label: "+90" },
  { value: "+92", label: "+92" },
  { value: "+93", label: "+93" },
  { value: "+94", label: "+94" },
  { value: "+95", label: "+95" },
  { value: "+98", label: "+98" },

  { value: "+211", label: "+211" },
  { value: "+212", label: "+212" },
  { value: "+213", label: "+213" },
  { value: "+216", label: "+216" },
  { value: "+218", label: "+218" },
  { value: "+220", label: "+220" },
  { value: "+221", label: "+221" },
  { value: "+222", label: "+222" },
  { value: "+223", label: "+223" },
  { value: "+224", label: "+224" },
  { value: "+225", label: "+225" },
  { value: "+226", label: "+226" },
  { value: "+227", label: "+227" },
  { value: "+228", label: "+228" },
  { value: "+229", label: "+229" },
  { value: "+230", label: "+230" },
  { value: "+231", label: "+231" },
  { value: "+232", label: "+232" },
  { value: "+233", label: "+233" },
  { value: "+234", label: "+234" },
  { value: "+235", label: "+235" },
  { value: "+236", label: "+236" },
  { value: "+237", label: "+237" },
  { value: "+238", label: "+238" },
  { value: "+239", label: "+239" },
  { value: "+240", label: "+240" },
  { value: "+241", label: "+241" },
  { value: "+242", label: "+242" },
  { value: "+243", label: "+243" },
  { value: "+244", label: "+244" },
  { value: "+245", label: "+245" },
  { value: "+246", label: "+246" },
  { value: "+248", label: "+248" },
  { value: "+249", label: "+249" },
  { value: "+250", label: "+250" },
  { value: "+251", label: "+251" },
  { value: "+252", label: "+252" },
  { value: "+253", label: "+253" },
  { value: "+254", label: "+254" },
  { value: "+255", label: "+255" },
  { value: "+256", label: "+256" },
  { value: "+257", label: "+257" },
  { value: "+258", label: "+258" },
  { value: "+260", label: "+260" },
  { value: "+261", label: "+261" },
  { value: "+262", label: "+262" },
  { value: "+263", label: "+263" },
  { value: "+264", label: "+264" },
  { value: "+265", label: "+265" },
  { value: "+266", label: "+266" },
  { value: "+267", label: "+267" },
  { value: "+268", label: "+268" },
  { value: "+269", label: "+269" },

  { value: "+290", label: "+290" },
  { value: "+291", label: "+291" },
  { value: "+297", label: "+297" },
  { value: "+298", label: "+298" },
  { value: "+299", label: "+299" },

  { value: "+350", label: "+350" },
  { value: "+351", label: "+351" },
  { value: "+352", label: "+352" },
  { value: "+353", label: "+353" },
  { value: "+354", label: "+354" },
  { value: "+355", label: "+355" },
  { value: "+356", label: "+356" },
  { value: "+357", label: "+357" },
  { value: "+358", label: "+358" },
  { value: "+359", label: "+359" },
  { value: "+370", label: "+370" },
  { value: "+371", label: "+371" },
  { value: "+372", label: "+372" },
  { value: "+373", label: "+373" },
  { value: "+374", label: "+374" },
  { value: "+375", label: "+375" },
  { value: "+376", label: "+376" },
  { value: "+377", label: "+377" },
  { value: "+378", label: "+378" },
  { value: "+380", label: "+380" },
  { value: "+381", label: "+381" },
  { value: "+382", label: "+382" },
  { value: "+383", label: "+383" },
  { value: "+385", label: "+385" },
  { value: "+386", label: "+386" },
  { value: "+387", label: "+387" },
  { value: "+389", label: "+389" },

  { value: "+420", label: "+420" },
  { value: "+421", label: "+421" },
  { value: "+423", label: "+423" },

  { value: "+500", label: "+500" },
  { value: "+501", label: "+501" },
  { value: "+502", label: "+502" },
  { value: "+503", label: "+503" },
  { value: "+504", label: "+504" },
  { value: "+505", label: "+505" },
  { value: "+506", label: "+506" },
  { value: "+507", label: "+507" },
  { value: "+508", label: "+508" },
  { value: "+509", label: "+509" },

  { value: "+590", label: "+590" },
  { value: "+591", label: "+591" },
  { value: "+592", label: "+592" },
  { value: "+593", label: "+593" },
  { value: "+595", label: "+595" },
  { value: "+597", label: "+597" },
  { value: "+598", label: "+598" },
  { value: "+599", label: "+599" },

  { value: "+670", label: "+670" },
  { value: "+672", label: "+672" },
  { value: "+673", label: "+673" },
  { value: "+674", label: "+674" },
  { value: "+675", label: "+675" },
  { value: "+676", label: "+676" },
  { value: "+677", label: "+677" },
  { value: "+678", label: "+678" },
  { value: "+679", label: "+679" },
  { value: "+680", label: "+680" },
  { value: "+681", label: "+681" },
  { value: "+682", label: "+682" },
  { value: "+685", label: "+685" },
  { value: "+686", label: "+686" },
  { value: "+687", label: "+687" },
  { value: "+688", label: "+688" },
  { value: "+689", label: "+689" },
  { value: "+690", label: "+690" },
  { value: "+691", label: "+691" },
  { value: "+692", label: "+692" },

  { value: "+850", label: "+850" },
  { value: "+852", label: "+852" },
  { value: "+853", label: "+853" },
  { value: "+855", label: "+855" },
  { value: "+856", label: "+856" },
  { value: "+867", label: "+867" },
  { value: "+868", label: "+868" },
  { value: "+875", label: "+875" },
  { value: "+880", label: "+880" },
  { value: "+886", label: "+886" },

  { value: "+960", label: "+960" },
  { value: "+961", label: "+961" },
  { value: "+962", label: "+962" },
  { value: "+963", label: "+963" },
  { value: "+964", label: "+964" },
  { value: "+965", label: "+965" },
  { value: "+966", label: "+966" },
  { value: "+967", label: "+967" },
  { value: "+968", label: "+968" },
  { value: "+970", label: "+970" },
  { value: "+972", label: "+972" },
  { value: "+973", label: "+973" },
  { value: "+974", label: "+974" },
  { value: "+975", label: "+975" },
  { value: "+976", label: "+976" },
  { value: "+977", label: "+977" },

  { value: "+992", label: "+992" },
  { value: "+993", label: "+993" },
  { value: "+994", label: "+994" },
  { value: "+995", label: "+995" },
  { value: "+996", label: "+996" },
  { value: "+998", label: "+998" },
];

const unitTypeOptions = [
  { value: "apartment", label: "Apartment" },
  { value: "townhouse", label: "Townhouse" },
  { value: "duplex-penthouse", label: "Duplex Penthouse" },
];
const bedroomsOptions = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
];
const budgetOptions = [
  { value: "1000000", label: "1000000" },
  { value: "2000000", label: "2000000" },
  { value: "3000000", label: "3000000" },
  { value: "4000000", label: "4000000" },
];
const messageOptions = [{ value: "message", label: "Message" }];
const hearAboutUsOptions = [
  { value: "google", label: "Google" },
  { value: "meta", label: "Meta" },
  { value: "outdoor-ad", label: "Outdoor Ad" },
  { value: "referral", label: "Referral" },
  { value: "social-media", label: "Social Media" },
];

export type FormFieldKey =
  | "firstName"
  | "lastName"
  | "email"
  | "phoneCountryCode"
  | "phoneNumber"
  | "hearAboutUs"
  | "unitType"
  | "bedrooms"
  | "budget"
  | "message";

export type FormViewType = "default" | "image" | "modal" | "banner";

export interface HiddenFields {
  developer?: string | undefined;
  location?: string | undefined;
}
export interface PropertySearchFormProps {
  formName?: string;
  pointName?: string;
  formType?: string;
  hiddenFields?: HiddenFields;
  visibleFields?: FormFieldKey[];
  requiredFields?: FormFieldKey[];
  onSubmit?: (formData: Record<string, string>) => void;
  className?: string;
  redirectToThankYou?: boolean;
  thankYouPath?: string;
  downloadBrochure?: boolean;
  brochureUrl?: string;
  viewType?: FormViewType;
  colorCodeOne?: string;
  colorCodeTwo?: string;
  colorCodeThree?: string;
  colorCodeBtnBg?: string;
  colorCodeBtnText?: string;
  colorCodeBtnBorder?: string;
  colorCodeBtnHoverBg?: string;
  colorCodeBtnHoverText?: string;
  colorCodeBtnHoverBorder?: string;
}

const ALL_FIELDS: FormFieldKey[] = [
  "firstName",
  "lastName",
  "email",
  "phoneCountryCode",
  "phoneNumber",
  "hearAboutUs",
  "unitType",
  "bedrooms",
  "budget",
  "message",
];

// Centralized field labels
const fieldLabels: Record<string, string> = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email Address",
  phoneCountryCode: "Code",
  phoneNumber: "Phone number",
  hearAboutUs: "How did you hear about us",
  unitType: "Unit Type",
  bedrooms: "Number of bedrooms",
  budget: "Budget",
  message: "Message",
};

export default function PropertySearchForm({
  formName,
  pointName,
  formType,
  hiddenFields,
  visibleFields = ALL_FIELDS,
  requiredFields = [],
  onSubmit,
  className = "",
  redirectToThankYou = true,
  thankYouPath = "/one-residence/thank-you",
  downloadBrochure = false,
  brochureUrl = "/brochure.pdf", // Default brochure URL
  viewType = "default",
  colorCodeOne = "#1a3a5c",
  colorCodeTwo = "#4a6fa5",
  colorCodeThree = "#1e4a71",
  colorCodeBtnBg = "#1a3a5c",
  colorCodeBtnText = "#ffffff",
  colorCodeBtnBorder = "#4a6fa5",
  colorCodeBtnHoverBg = "#4a6fa5",
  colorCodeBtnHoverText = "#ffffff",
  colorCodeBtnHoverBorder = "#1a3a5c",
}: PropertySearchFormProps) {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const router = useRouter();
  const isDark = theme === "dark";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCountryCode: "+971",
    phoneNumber: "",
    hearAboutUs: "",
    unitType: "",
    bedrooms: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(true);
  const [phoneError, setPhoneError] = useState<string>("");
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>(
    {},
  );
  
  const handleSelectChange =
    (field: string) => (event: SelectChangeEvent<string>) => {
      if (field != "phoneNumber") {
        const value = event.target.value;
        setFormData({ ...formData, [field]: value });
      }

      // Clear error when user starts typing/selecting
      if (fieldErrors[field]) {
        setFieldErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[field];
          return newErrors;
        });
      }

      // Mark field as touched
      setTouchedFields((prev) => ({ ...prev, [field]: true }));
    };

  const handleInputChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (field != "phoneNumber") {
        const value = event.target.value;
        setFormData({ ...formData, [field]: value });
      }

      // Clear error when user starts typing
      if (fieldErrors[field]) {
        setFieldErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[field];
          return newErrors;
        });
      }

      // Mark field as touched
      setTouchedFields((prev) => ({ ...prev, [field]: true }));
    };

  const validateField = (field: FormFieldKey): string => {
    if (!requiredFields.includes(field)) return "";

    /// will add the error here
    if (field == "phoneNumber") {
      return phoneError;
    }

    const value = formData[field];
    if (!value || value.trim() === "") {
      const fieldLabel = t(`${field}` as any) || fieldLabels[field] || field;
      return !(fieldLabel == "phoneNumber") ? `${fieldLabel} is required` : "";
    }

    // Email validation
    if (field === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address";
      }
    }

    return "";
  };

  const validateAllFields = (): boolean => {
    const errors: Record<string, string> = {};
    let isValid = true;

    requiredFields.forEach((field) => {
      const error = validateField(field);
      if (error) {
        errors[field] = error;
        isValid = false;
      }
    });

    setFieldErrors(errors);

    // Mark all required fields as touched to show errors
    const touched: Record<string, boolean> = {};
    requiredFields.forEach((field) => {
      touched[field] = true;
    });
    setTouchedFields((prev) => ({ ...prev, ...touched }));

    return isValid;
  };

  const downloadBrochureFile = () => {
    try {
      // Create a temporary anchor element to trigger download
      const link = document.createElement("a");
      link.href = brochureUrl;
      link.download = "Seamont-Brochure.pdf"; // Default filename
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading brochure:", error);
      // Fallback: open in new tab if download fails
      window.open(brochureUrl, "_blank");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all required fields
    if (!validateAllFields()) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields marked with *",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // developer and location ids map and send (if found)
    const developerId = hiddenFields?.developer
    ? DEVELOPERS_MAP.get(hiddenFields.developer)
    : undefined;

    const locationId = hiddenFields?.location
      ? LOCATIONS_MAP.get(hiddenFields.location)
      : undefined;

    const submissionData: Record<string, string> = {
      ...formData,
      ...(developerId && { developerId }),
      ...(locationId && { locationId }),
      CompanyStatus: 'Yes',
    };

    if (formName) submissionData.formName = formName;
    if (pointName) submissionData.pointName = pointName;
    if (formType) submissionData.formType = formType;

    try {
      // Submit to both Laravel API and Next.js Email API (dual submission)
      const [apiResult, emailResult] = await Promise.allSettled([
        // Submit to Laravel API
        submitFormLead(submissionData, formName, pointName, formType),
        // Submit to Next.js Email API
        fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: submissionData.firstName,
            lastName: submissionData.lastName,
            email: submissionData.email,
            phoneNumber: submissionData.phoneNumber,
            message: submissionData.message,
            hearAboutUs: submissionData.hearAboutUs,
            unitType: submissionData.unitType,
            bedrooms: submissionData.bedrooms,
            budget: submissionData.budget,
            formName,
            pointName,
            formType,
            developerId: DEVELOPERS_MAP.get(hiddenFields.developer) || 'Not Found',
            locationId: DEVELOPERS_MAP.get(hiddenFields.developer) || 'Not Found'
          }),
        }).then(async (res) => {
          const data = await res.json();
          if (!res.ok) {
            throw new Error(data.error || "Failed to send email");
          }
          return data;
        }),
      ]);

      // Check Laravel API result
      const laravelSuccess =
        apiResult.status === "fulfilled" && apiResult.value.success;
      const emailSuccess = emailResult.status === "fulfilled";

      // Log results for debugging
      if (apiResult.status === "rejected") {
        console.error("Laravel API error:", apiResult.reason);
      }
      if (emailResult.status === "rejected") {
        console.error("Email API error:", emailResult.reason);
      }

      // // Consider submission successful if at least Laravel API succeeds
      // // Email is secondary (for notifications)
      if (!laravelSuccess) {
        const errorMessage =
          apiResult.status === "fulfilled"
            ? apiResult.value.error || "Failed to submit form"
            : apiResult.reason?.message || "Failed to submit form";
        throw new Error(errorMessage);
      }

      setSubmitStatus({
        type: "success",
        message:
          apiResult.status === "fulfilled"
            ? apiResult.value.message ||
              "Form submitted successfully! We will contact you soon."
            : "Form submitted successfully! We will contact you soon.",
      });

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneCountryCode: "+971",
        phoneNumber: "",
        hearAboutUs: "",
        unitType: "",
        bedrooms: "",
        budget: "",
        message: "",
      });

      // Clear all errors
      setFieldErrors({});
      setTouchedFields({});

      // Call custom onSubmit if provided
      if (onSubmit) {
        onSubmit(submissionData);
      }

      // Download brochure if enabled
      if (downloadBrochure) {
        setTimeout(() => {
          downloadBrochureFile();
        }, 500); // Small delay to ensure form submission is complete
      }

      // Redirect to thank you page if enabled
      if (redirectToThankYou) {
        setTimeout(() => {
          pushToDataLayer({
            event: "form_submit",
            label: formName || "Form Submission",
            value: formType || "Contact Us Form Is Submitted",
          });
          reportConversion(thankYouPath);
          //router.push(thankYouPath);
        }, 1500); // Small delay to show success message
      } else {
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: "" });
        }, 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to submit form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSelectStyles = (field: FormFieldKey) => {
    const hasError = fieldErrors[field] && touchedFields[field];

    // Banner view: white background, dark text
    if (viewType === "banner") {
      return {
        "& .MuifilledInput-root": {
          color: "#333",
          backgroundColor: "white",
          borderRadius: "8px",
          "& fieldset": {
            borderColor: hasError ? "#ef4444" : "#e0e0e0",
            borderWidth: hasError ? "2px" : "1px",
          },
          "&:hover fieldset": {
            borderColor: hasError ? "#ef4444" : "#bdbdbd",
          },
          "&.Mui-focused fieldset": {
            borderColor: hasError ? "#ef4444" : colorCodeOne,
            borderWidth: "2px",
          },
          "&.Mui-error fieldset": {
            borderColor: "#ef4444",
          },
        },
        "& .MuiInputLabel-root": {
          color: hasError ? "#ef4444" : colorCodeThree,
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          fontWeight: 500,
          "&.Mui-focused": {
            color: hasError ? "#ef4444" : colorCodeOne,
          },
          "&.Mui-error": {
            color: "#ef4444",
          },
        },
        "& .MuiSelect-icon": {
          color: hasError ? "#ef4444" : colorCodeThree,
        },
      };
    }

    // Image view: white background, dark text
    if (viewType === "image") {
      return {
        "& .MuifilledInput-root": {
          color: "#333",
          backgroundColor: "white",
          borderRadius: "8px",
          "& fieldset": {
            borderColor: hasError ? "#ef4444" : "#e0e0e0",
            borderWidth: hasError ? "2px" : "1px",
          },
          "&:hover fieldset": {
            borderColor: hasError ? "#ef4444" : "#bdbdbd",
          },
          "&.Mui-focused fieldset": {
            borderColor: hasError ? "#ef4444" : colorCodeOne,
            borderWidth: "2px",
          },
          "&.Mui-error fieldset": {
            borderColor: "#ef4444",
          },
        },
        "& .MuiInputLabel-root": {
          color: hasError ? "#ef4444" : colorCodeThree,
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          fontWeight: 500,
          "&.Mui-focused": {
            color: hasError ? "#ef4444" : colorCodeOne,
          },
          "&.Mui-error": {
            color: "#ef4444",
          },
        },
        "& .MuiSelect-icon": {
          color: hasError ? "#ef4444" : colorCodeThree,
        },
      };
    }

    // Modal view: white background, dark text
    if (viewType === "modal") {
      return {
        "& .MuifilledInput-root": {
          color: "#333",
          backgroundColor: "white",
          borderRadius: "8px",
          "& fieldset": {
            borderColor: hasError ? "#ef4444" : "#e0e0e0",
            borderWidth: hasError ? "2px" : "1px",
          },
          "&:hover fieldset": {
            borderColor: hasError ? "#ef4444" : "#bdbdbd",
          },
          "&.Mui-focused fieldset": {
            borderColor: hasError ? "#ef4444" : colorCodeOne,
            borderWidth: "2px",
          },
          "&.Mui-error fieldset": {
            borderColor: "#ef4444",
          },
        },
        "& .MuiInputLabel-root": {
          color: hasError ? "#ef4444" : colorCodeThree,
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          fontWeight: 500,
          "&.Mui-focused": {
            color: hasError ? "#ef4444" : colorCodeOne,
          },
          "&.Mui-error": {
            color: "#ef4444",
          },
        },
        "& .MuiSelect-icon": {
          color: hasError ? "#ef4444" : colorCodeThree,
        },
      };
    }

    // Default view: transparent background, white text
    return {
      "& .MuifilledInput-root": {
        color: "#232323",
        backgroundColor: isDark
          ? "rgba(255, 255, 255, 0.05)"
          : "rgba(255, 255, 255, 0.1)",
        "& fieldset": {
          borderColor: hasError
            ? "#232323"
            : isDark
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(255, 255, 255, 0.2)",
          borderWidth: hasError ? "2px" : "1px",
        },
        "&:hover fieldset": {
          borderColor: hasError
            ? "#232323"
            : isDark
              ? "rgba(255, 255, 255, 0.2)"
              : "rgba(255, 255, 255, 0.3)",
        },
        "&.Mui-focused fieldset": {
          borderColor: hasError
            ? "#ef4444"
            : isDark
              ? "rgba(255, 255, 255, 0.3)"
              : "rgba(255, 255, 255, 0.4)",
        },
        "&.Mui-error fieldset": {
          borderColor: "#232323",
        },
      },
      "& .MuiInputLabel-root": {
        color: hasError ? colorCodeThree : "rgba(35, 35, 35, 0.7)",
        fontSize: "0.75rem",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        "&.Mui-focused": {
          color: hasError ? colorCodeThree : "rgba(35, 35, 35, 0.9)",
        },
        "&.Mui-error": {
          color: "#232323",
        },
      },
      "& .MuiSelect-icon": {
        color: hasError ? "#232323" : colorCodeThree,
      },
    };
  };

  const getTextFieldStyles = (field: FormFieldKey) => {
    const hasError = fieldErrors[field] && touchedFields[field];

    if (viewType === "banner") {
      return {
        "& .MuifilledInput-root": {
          color: "#333",
          backgroundColor: "white",
          borderRadius: "8px",
          "& fieldset": {
            borderColor: hasError ? "#ef4444" : "#e0e0e0",
            borderWidth: hasError ? "2px" : "1px",
          },
          "&:hover fieldset": {
            borderColor: hasError ? "#ef4444" : "#bdbdbd",
          },
          "&.Mui-focused fieldset": {
            borderColor: hasError ? "#ef4444" : colorCodeOne,
            borderWidth: "2px",
          },
          "&.Mui-error fieldset": {
            borderColor: "#ef4444",
          },
          "& input::placeholder": {
            color: "#999",
            opacity: 1,
          },
        },
        "& .MuiInputLabel-root": {
          color: hasError ? "#ef4444" : colorCodeThree,
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          fontWeight: 500,
          "&.Mui-focused": {
            color: hasError ? "#ef4444" : colorCodeOne,
          },
          "&.Mui-error": {
            color: "#ef4444",
          },
        },
      };
    }

    // Image view: white background, dark text
    if (viewType === "image") {
      return {
        "& .MuifilledInput-root": {
          color: "#333",
          backgroundColor: "white",
          borderRadius: "8px",
          "& fieldset": {
            borderColor: hasError ? "#ef4444" : "#e0e0e0",
            borderWidth: hasError ? "2px" : "1px",
          },
          "&:hover fieldset": {
            borderColor: hasError ? "#ef4444" : "#bdbdbd",
          },
          "&.Mui-focused fieldset": {
            borderColor: hasError ? "#ef4444" : colorCodeOne,
            borderWidth: "2px",
          },
          "&.Mui-error fieldset": {
            borderColor: "#ef4444",
          },
          "& input::placeholder": {
            color: "#999",
            opacity: 1,
          },
        },
        "& .MuiInputLabel-root": {
          color: hasError ? "#ef4444" : colorCodeThree,
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          fontWeight: 500,
          "&.Mui-focused": {
            color: hasError ? "#ef4444" : colorCodeOne,
          },
          "&.Mui-error": {
            color: "#ef4444",
          },
        },
      };
    }

    // Modal view: white background, dark text
    if (viewType === "modal") {
      return {
        "& .MuifilledInput-root": {
          color: "#333",
          backgroundColor: "white",
          borderRadius: "8px",
          "& fieldset": {
            borderColor: hasError ? "#ef4444" : "#e0e0e0",
            borderWidth: hasError ? "2px" : "1px",
          },
          "&:hover fieldset": {
            borderColor: hasError ? "#ef4444" : "#bdbdbd",
          },
          "&.Mui-focused fieldset": {
            borderColor: hasError ? "#ef4444" : colorCodeOne,
            borderWidth: "2px",
          },
          "&.Mui-error fieldset": {
            borderColor: "#ef4444",
          },
          "& input::placeholder": {
            color: "#999",
            opacity: 1,
          },
        },
        "& .MuiInputLabel-root": {
          color: hasError ? "#ef4444" : colorCodeThree,
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          fontWeight: 500,
          "&.Mui-focused": {
            color: hasError ? "#ef4444" : colorCodeOne,
          },
          "&.Mui-error": {
            color: "#ef4444",
          },
        },
      };
    }

    // Default view: transparent background, white text
    return {
      "& .MuifilledInput-root": {
        color: "#232323",
        backgroundColor: isDark
          ? "rgba(255, 255, 255, 0.05)"
          : "rgba(255, 255, 255, 0.1)",
        "& fieldset": {
          borderColor: hasError
            ? "#ef4444"
            : isDark
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(255, 255, 255, 0.2)",
          borderWidth: hasError ? "2px" : "1px",
        },
        "&:hover fieldset": {
          borderColor: hasError
            ? "#232323"
            : isDark
              ? "rgba(255, 255, 255, 0.2)"
              : "rgba(255, 255, 255, 0.3)",
        },
        "&.Mui-focused fieldset": {
          borderColor: hasError
            ? "#ef4444"
            : isDark
              ? "rgba(255, 255, 255, 0.3)"
              : "rgba(255, 255, 255, 0.4)",
        },
        "&.Mui-error fieldset": {
          borderColor: "#232323",
        },
        "& input::placeholder": {
          color: "rgba(255, 255, 255, 0.5)",
          opacity: 1,
        },
      },
      "& .MuiInputLabel-root": {
        color: hasError ? "#232323" : "rgba(35, 35, 35, 0.7)",
        fontSize: "0.75rem",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        "&.Mui-focused": {
          color: hasError ? "#232323" : "rgba(35, 35, 35, 0.9)",
        },
        "&.Mui-error": {
          color: "#232323",
        },
      },
    };
  };

  const getMenuProps = () => {
    // Image and modal views use light dropdown menus
    if (viewType === "image" || viewType === "modal" || viewType === "banner") {
      return {
        PaperProps: {
          sx: {
            backgroundColor: "white",
            color: "#333",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            "& .MuiMenuItem-root": {
              color: "#333",
              "&:hover": {
                backgroundColor: "rgba(26, 58, 92, 0.1)",
              },
              "&.Mui-selected": {
                backgroundColor: "rgba(26, 58, 92, 0.2)",
                "&:hover": {
                  backgroundColor: "rgba(26, 58, 92, 0.25)",
                },
              },
            },
          },
        },
      };
    }

    // Default view uses dark dropdown menu
    return {
      PaperProps: {
        sx: {
          backgroundColor: isDark ? "#1a1a1a" : "#2a2a2a",
          color: "white",
          "& .MuiMenuItem-root": {
            color: "white",
            "&:hover": {
              backgroundColor: isDark
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(255, 255, 255, 0.15)",
            },
            "&.Mui-selected": {
              backgroundColor: isDark
                ? "rgba(255, 255, 255, 0.2)"
                : "rgba(255, 255, 255, 0.25)",
              "&:hover": {
                backgroundColor: isDark
                  ? "rgba(255, 255, 255, 0.25)"
                  : "rgba(255, 255, 255, 0.3)",
              },
            },
          },
        },
      },
    };
  };

  // Helper function to format label with asterisk for required fields
  const getLabel = (fieldKey: FormFieldKey, defaultLabel: string): string => {
    const label = t(`${fieldKey}` as any) || defaultLabel;
    return requiredFields.includes(fieldKey) ? `${label} *` : label;
  };

  // Helper function to get error message color class
  const getErrorColorClass = () => {
    return viewType === "image" || viewType === "modal" || viewType === "banner"
      ? "text-red-600"
      : "text-red-400";
  };

  const renderFirstNameField = () => {
    if (!visibleFields.includes("firstName")) return null;
    const isRequired = requiredFields.includes("firstName");
    const labelText = getLabel("firstName", "First Name");
    const hasError = !!(fieldErrors["firstName"] && touchedFields["firstName"]);

    return (
      <div>
        <TextField
          fullWidth
          id="firstName"
          label={"First Name"}
          value={formData.firstName}
          onChange={handleInputChange("firstName")}
          variant="filled"
          required={isRequired}
          error={hasError}
          sx={getTextFieldStyles("firstName")}
          className="bg-white border-2 border-gray-300 rounded-md"
          size="small"
        />
        {hasError && (
          <div
            className={`text-xs mt-1 ml-3 ${
              viewType === "image" || viewType === "modal"
                ? "text-red-600"
                : "text-red-400"
            }`}
          >
            {fieldErrors["firstName"]}
          </div>
        )}
      </div>
    );
  };

  const renderLastNameField = () => {
    if (!visibleFields.includes("lastName")) return null;
    const isRequired = requiredFields.includes("lastName");
    const labelText = getLabel("lastName", "Last Name");
    const hasError = !!(fieldErrors["lastName"] && touchedFields["lastName"]);

    return (
      <div>
        <TextField
          fullWidth
          id="lastName"
          label={"Last Name"}
          value={formData.lastName}
          onChange={handleInputChange("lastName")}
          variant="filled"
          required={isRequired}
          error={hasError}
          sx={getTextFieldStyles("lastName")}
          className="bg-white border-2 border-gray-300 rounded-md"
          size="small"
        />
        {hasError && (
          <div className={`${getErrorColorClass()} text-xs mt-1 ml-3`}>
            {fieldErrors["lastName"]}
          </div>
        )}
      </div>
    );
  };

  const renderEmailField = () => {
    if (!visibleFields.includes("email")) return null;
    const isRequired = requiredFields.includes("email");
    const labelText = getLabel("email", "Email Address");
    const hasError = !!(fieldErrors["email"] && touchedFields["email"]);

    return (
      <div>
        <TextField
          fullWidth
          id="email"
          type="email"
          label={"Email Address"}
          value={formData.email}
          onChange={handleInputChange("email")}
          variant="filled"
          required={isRequired}
          error={hasError}
          sx={getTextFieldStyles("email")}
          className="bg-white border-2 border-gray-300 rounded-md"
          size="small"
        />
        {hasError && (
          <div className={`${getErrorColorClass()} text-xs mt-1 ml-3`}>
            {fieldErrors["email"]}
          </div>
        )}
      </div>
    );
  };

  const renderPhoneField = () => {
    if (!visibleFields.includes("phoneNumber")) return null;
    const isRequired = requiredFields.includes("phoneNumber");
    const hasError = !!(
      fieldErrors["phoneNumber"] && touchedFields["phoneNumber"]
    );

    return (
      <div>
        <div className="flex gap-2">
          {/* <FormControl
            variant="filled"
            className="bg-white border-2 border-gray-300 rounded-md"
            sx={{ width: "120px", ...getSelectStyles("phoneCountryCode") }}
            error={hasError}
          >
            <InputLabel id="phone-country-code-label">
              {t("phoneCountryCode") || fieldLabels.phoneCountryCode}
            </InputLabel>
            <Select
              labelId="phone-country-code-label"
              id="phone-country-code"
              value={formData.phoneCountryCode}
              label="Code"
              onChange={handleSelectChange("phoneCountryCode")}
              MenuProps={getMenuProps()}
              size="small"
            >
              {countryCodes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl> */}
          {/* <TextField
            fullWidth
            id="phoneNumber"
            label={"Phone number"}
            value={formData.phoneNumber}
            onChange={handleInputChange("phoneNumber")}
            variant="filled"
            required={isRequired}
            error={hasError}
            sx={getTextFieldStyles("phoneNumber")}
            className="bg-white border-2 border-gray-300 rounded-md"
            size="small"
          /> */}
          <PhoneNumberInput
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handlePhoneInputChange}
            required={isRequired}
            setError={setPhoneError}
          />
        </div>
        {/* {hasError && (
          <div className={`${getErrorColorClass()} text-xs mt-1 ml-3`}>
            {fieldErrors["phoneNumber"]}
          </div>
        )} */}
      </div>
    );
  };

  const renderHearAboutUsField = () => {
    if (!visibleFields.includes("hearAboutUs")) return null;
    const isRequired = requiredFields.includes("hearAboutUs");
    const labelText = getLabel("hearAboutUs", "How did you hear about us");
    const hasError = !!(
      fieldErrors["hearAboutUs"] && touchedFields["hearAboutUs"]
    );

    const hearAboutUsOptions = [
      "Google",
      "Meta",
      "Outdoor Ad",
      "Referral",
      "Social Media",
      "SnapChat",
      "TikTok",
      "Instagram",
      "YouTube",
      "Facebook",
      "Walk-in",
      "Website",
      "Epsilon",
      "Vidmatic",
      "StarzOn",
      "Newsletter",
      "Programmatic",
      "Dubizzle",
      "AOD",
      "Bayut",
      "EDM",
      "IHC",
      "LinkedIn",
    ];

    return (
      <FormControl
        fullWidth
        sx={getSelectStyles("hearAboutUs")}
        required={isRequired}
        error={hasError}
        variant="filled"
        className="bg-white border-2 border-gray-300 rounded-md"
      >
        <InputLabel id="hear-about-us-label" required={isRequired}>
          {"How did you hear about us"}
        </InputLabel>
        <Select
          labelId="hear-about-us-label"
          id="hear-about-us"
          value={formData.hearAboutUs}
          label={labelText}
          onChange={handleSelectChange("hearAboutUs")}
          MenuProps={getMenuProps()}
          error={hasError}
          size="small"
        >
          <MenuItem value="">
            <em>{t("select")}</em>
          </MenuItem>
          {hearAboutUsOptions.map((option) => (
            <MenuItem
              key={option}
              value={option.toLowerCase().replace(/\s+/g, "-")}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
        {hasError && (
          <div className={`${getErrorColorClass()} text-xs mt-1 ml-3`}>
            {fieldErrors["hearAboutUs"]}
          </div>
        )}
      </FormControl>
    );
  };

  const renderUnitTypeField = () => {
    if (!visibleFields.includes("unitType")) return null;
    const isRequired = requiredFields.includes("unitType");
    const labelText = getLabel("unitType", "Unit Type");
    const hasError = !!(fieldErrors["unitType"] && touchedFields["unitType"]);

    return (
      <FormControl
        fullWidth
        sx={getSelectStyles("unitType")}
        required={isRequired}
        error={hasError}
        variant="filled"
        className="bg-white border-2 border-gray-300 rounded-md"
      >
        <InputLabel id="unit-type-label" required={isRequired}>
          {"Unit Type"}
        </InputLabel>
        <Select
          labelId="unit-type-label"
          id="unit-type"
          value={formData.unitType}
          label={labelText}
          onChange={handleSelectChange("unitType")}
          MenuProps={getMenuProps()}
          error={hasError}
          size="small"
        >
          <MenuItem value="">
            <em>{t("select")}</em>
          </MenuItem>
          <MenuItem value="apartment">Apartment</MenuItem>
          <MenuItem value="townhouse">Townhouse</MenuItem>
          <MenuItem value="duplex-penthouse">Duplex Penthouse</MenuItem>
        </Select>
        {hasError && (
          <div className={`${getErrorColorClass()} text-xs mt-1 ml-3`}>
            {fieldErrors["unitType"]}
          </div>
        )}
      </FormControl>
    );
  };

  const renderBedroomsField = () => {
    if (!visibleFields.includes("bedrooms")) return null;
    const isRequired = requiredFields.includes("bedrooms");
    const labelText = getLabel("bedrooms", "Number of bedrooms");
    const hasError = !!(fieldErrors["bedrooms"] && touchedFields["bedrooms"]);

    return (
      <FormControl
        fullWidth
        sx={getSelectStyles("bedrooms")}
        required={isRequired}
        error={hasError}
        variant="filled"
        className="bg-white border-2 border-gray-300 rounded-md"
      >
        <InputLabel id="bedrooms-label" required={isRequired}>
          {"Number of bedrooms"}
        </InputLabel>
        <Select
          labelId="bedrooms-label"
          id="bedrooms"
          value={formData.bedrooms}
          label={labelText}
          onChange={handleSelectChange("bedrooms")}
          MenuProps={getMenuProps()}
          error={hasError}
          size="small"
        >
          <MenuItem value="">
            <em>{t("select")}</em>
          </MenuItem>
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
        </Select>
        {hasError && (
          <div className={`${getErrorColorClass()} text-xs mt-1 ml-3`}>
            {fieldErrors["bedrooms"]}
          </div>
        )}
      </FormControl>
    );
  };

  const renderBudgetField = () => {
    if (!visibleFields.includes("budget")) return null;
    const isRequired = requiredFields.includes("budget");
    const labelText = getLabel("budget", "Budget");
    const hasError = !!(fieldErrors["budget"] && touchedFields["budget"]);

    return (
      <FormControl
        fullWidth
        sx={getSelectStyles("budget")}
        required={isRequired}
        error={hasError}
        variant="filled"
        className="bg-white border-2 border-gray-300 rounded-md"
      >
        <InputLabel id="budget-label" required={isRequired}>
          {"Budget"}
        </InputLabel>
        <Select
          labelId="budget-label"
          id="budget"
          value={formData.budget}
          label={labelText}
          onChange={handleSelectChange("budget")}
          MenuProps={getMenuProps()}
          error={hasError}
          size="small"
        >
          <MenuItem value="">
            <em>{t("select")}</em>
          </MenuItem>
          <MenuItem value="2-3m">AED 2–3M</MenuItem>
          <MenuItem value="3-4m">AED 3–4M</MenuItem>
          <MenuItem value="4-5m">AED 4–5M</MenuItem>
          <MenuItem value="5m+">5M+</MenuItem>
        </Select>
        {hasError && (
          <div className={`${getErrorColorClass()} text-xs mt-1 ml-3`}>
            {fieldErrors["budget"]}
          </div>
        )}
      </FormControl>
    );
  };

  const renderMessageField = () => {
    if (!visibleFields.includes("message")) return null;
    const isRequired = requiredFields.includes("message");
    const labelText = getLabel("message", "Message");
    const hasError = !!(fieldErrors["message"] && touchedFields["message"]);

    return (
      <div>
        <TextField
          fullWidth
          id="message"
          label={labelText}
          value={formData.message}
          onChange={handleInputChange("message")}
          variant="filled"
          multiline
          rows={4}
          required={isRequired}
          error={hasError}
          sx={getTextFieldStyles("message")}
          className="bg-white border-2 border-gray-300 rounded-md"
          size="small"
        />
        {hasError && (
          <div className={`${getErrorColorClass()} text-xs mt-1 ml-3`}>
            {fieldErrors["message"]}
          </div>
        )}
      </div>
    );
  };

  // Get container classes based on view type
  const getContainerClasses = () => {
    if (viewType === "modal") {
      return "relative p-8 lg:p-12 image-form";
    }
    if (viewType === "image") {
      return "relative p-8 lg:p-12 image-form";
    }
    if (viewType === "banner") {
      return "relative p-8 lg:p-12 banner-form";
    }
    // Default view
    return `bg-[${colorCodeOne}] dark:bg-[#0f1f2e] text-white p-6 lg:p-8 defaul-form ${
      className.includes("!relative")
        ? "relative"
        : " bottom-0 left-0 right-0 z-20 rounded-lg"
    }`;
  };

  // Get form wrapper classes based on view type
  const getFormWrapperClasses = () => {
    if (viewType === "modal") {
      return "w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-8 lg:p-12 m-8";
    }
    if (viewType === "image") {
      return "max-w-6xl mx-auto";
    }
    if (viewType === "banner") {
      return "max-w-8xl mx-auto custom-width-full-banner";
    }
    return "container mx-auto";
  };

  // Get form title based on view type
  const renderFormTitle = () => {
    if (viewType === "image" || viewType === "modal" || viewType === "banner") {
      return (
        // <div className="mb-8">
        //   <h2
        //     className="text-2xl lg:text-3xl font-bold text-white mb-2"
        //     style={{ fontFamily: "var(--font-playfair), serif" }}
        //   >
        //     REGISTER
        //   </h2>
        //   <h2
        //     className="text-2xl lg:text-3xl font-bold text-white"
        //     style={{ fontFamily: "var(--font-playfair), serif" }}
        //   >
        //     YOUR INTEREST
        //   </h2>
        // </div>
        <></>
      );
    }
    return null;
  };

  // Render phone country code field for image view
  const renderPhoneCountryCodeField = () => {
    return (
      <FormControl
        variant="filled"
        className="bg-white border-2 border-gray-300 rounded-md"
        fullWidth
        sx={getSelectStyles("phoneCountryCode")}
      >
        <InputLabel id="phone-country-code-label">
          {t("phoneCountryCode") || fieldLabels.phoneCountryCode}
        </InputLabel>
        <Select
          labelId="phone-country-code-label"
          id="phone-country-code"
          value={formData.phoneCountryCode}
          label="Code"
          onChange={handleSelectChange("phoneCountryCode")}
          MenuProps={getMenuProps()}
          size="small"
        >
          {countryCodes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  // Render phone number field only (without country code) for image view
  const handlePhoneInputChange = (num: string) => {
    setFormData({ ...formData, ["phoneNumber"]: num });
  };

  const renderPhoneNumberFieldOnly = () => {
    if (!visibleFields.includes("phoneNumber")) return null;
    const isRequired = requiredFields.includes("phoneNumber");
    // const hasError = !!(
    //   fieldErrors["phoneNumber"] && touchedFields["phoneNumber"]
    // );

    return (
      // <TextField
      //   fullWidth
      //   id="phoneNumber"
      //   label={"Phone number"}
      //   value={formData.phoneNumber}
      //   onChange={handleInputChange("phoneNumber")}
      //   variant="filled"
      //   required={isRequired}
      //   error={hasError}
      //   sx={getTextFieldStyles("phoneNumber")}
      //   className="bg-white border-2 border-gray-300 rounded-md"
      //   size="small"
      // />
      <PhoneNumberInput
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handlePhoneInputChange}
        required={isRequired}
        setError={setPhoneError}
      />
    );
  };

  // Get layout for banner view (matching the image)
  const renderBannerViewLayout = () => (
    <Box className="space-y-4">
      {/* First Row: First Name, Last Name, Email, Phone Code, Phone Number */}
      <Box className="grid grid-cols-1 md:grid-cols-4 gap-4 box-margin-bottom">
        {renderFirstNameField()}
        {renderLastNameField()}
        {renderEmailField()}
        {/* {renderPhoneCountryCodeField()} */}
        <div className="h-full">
          {renderPhoneNumberFieldOnly()}
          {/* {fieldErrors["phoneNumber"] && touchedFields["phoneNumber"] && (
            <div className={`${getErrorColorClass()} text-xs mt-1`}>
              {fieldErrors["phoneNumber"]}
            </div>
          )} */}
        </div>
      </Box>

      {/* Second Row: How did you hear about us, Unit Type, Bedrooms, Budget */}
      <Box className="grid grid-cols-1 md:grid-cols-3 gap-4 box-margin-bottom">
        {renderHearAboutUsField()}
        {renderUnitTypeField()}
        {renderBedroomsField()}
        {renderBudgetField()}
      </Box>

      {/* Third Row: Message and Submit Button */}
      <Box className="grid grid-cols-1 md:grid-cols-3 gap-4 box-margin-bottom">
        <Box className="md:col-span-2">{renderMessageField()}</Box>
        <Box className="flex items-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[${colorCodeBtnBg}] text-[${colorCodeBtnText}] px-8 py-2 rounded-lg uppercase tracking-wider font-semibold hover:bg-[${colorCodeBtnHoverBg}]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed border-2 border-white`}
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            {isSubmitting ? "Sending..." : "SUBMIT"}
          </button>
        </Box>
      </Box>

      {/* Status messages for banner view */}
      {submitStatus.type && (
        <div
          className={`p-4 rounded ${
            submitStatus.type === "success"
              ? "bg-green-500/20 text-green-700 border border-green-500/50"
              : "bg-red-500/20 text-red-700 border border-red-500/50"
          }`}
        >
          {submitStatus.message}
        </div>
      )}
    </Box>
  );

  // Get layout for image view (matching the image)
  const renderImageViewLayout = () => (
    <Box className="space-y-4">
      {/* First Row: First Name, Last Name, Email, Phone Code, Phone Number */}
      <Box className="grid grid-cols-1 md:grid-cols-4 gap-4 box-margin-bottom">
        {renderFirstNameField()}
        {renderLastNameField()}
        {renderEmailField()}
        {/* {renderPhoneCountryCodeField()} */}
        <div>
          {renderPhoneNumberFieldOnly()}
          {/* {fieldErrors["phoneNumber"] && touchedFields["phoneNumber"] && (
            <div className={`${getErrorColorClass()} text-xs mt-1`}>
              {fieldErrors["phoneNumber"]}
            </div>
          )} */}
        </div>
      </Box>

      {/* Second Row: How did you hear about us, Unit Type, Bedrooms, Budget */}
      <Box className="grid grid-cols-1 md:grid-cols-4 gap-4 box-margin-bottom">
        {renderHearAboutUsField()}
        {renderUnitTypeField()}
        {renderBedroomsField()}
        {renderBudgetField()}
      </Box>

      {/* Third Row: Message and Submit Button */}
      <Box className="grid grid-cols-1 md:grid-cols-3 gap-4 box-margin-bottom">
        <Box className="md:col-span-2">{renderMessageField()}</Box>
        <Box className="flex items-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[${colorCodeBtnBg}] text-[${colorCodeBtnText}] px-8 py-4 rounded-lg uppercase tracking-wider font-semibold hover:bg-[${colorCodeBtnHoverBg}]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed border-2 border-white`}
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            {isSubmitting ? "Sending..." : "SUBMIT"}
          </button>
        </Box>
      </Box>

      {/* Status messages for image view */}
      {submitStatus.type && (
        <div
          className={`p-4 rounded ${
            submitStatus.type === "success"
              ? "bg-green-500/20 text-green-200 border border-green-500/50"
              : "bg-red-500/20 text-red-200 border border-red-500/50"
          }`}
        >
          {submitStatus.message}
        </div>
      )}
    </Box>
  );

  // Get layout for default and modal views
  const renderDefaultLayout = () => (
    <Box className="space-y-4">
      {/* First Row: First Name, Last Name */}
      <Box className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderFirstNameField()}
        {renderLastNameField()}
      </Box>

      {/* Second Row: Email */}
      {visibleFields.includes("email") && <Box>{renderEmailField()}</Box>}

      {/* Third Row: Phone Number with Country Code */}
      {visibleFields.includes("phoneNumber") && <Box>{renderPhoneField()}</Box>}

      {/* Fourth Row: How did you hear about us */}
      {visibleFields.includes("hearAboutUs") && (
        <Box>{renderHearAboutUsField()}</Box>
      )}

      {/* Fifth Row: Unit Type, Bedrooms, Budget */}
      <Box className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {renderUnitTypeField()}
        {renderBedroomsField()}
        {renderBudgetField()}
      </Box>

      {/* Sixth Row: Message */}
      {visibleFields.includes("message") && <Box>{renderMessageField()}</Box>}
    </Box>
  );

  // Update phone field renderer for image view
  const renderPhoneFieldForImage = () => {
    if (!visibleFields.includes("phoneNumber")) return null;
    const isRequired = requiredFields.includes("phoneNumber");
    const hasError = !!(
      fieldErrors["phoneNumber"] && touchedFields["phoneNumber"]
    );

    return (
      // <TextField
      //   fullWidth
      //   id="phoneNumber"
      //   label={"Phone number"}
      //   value={formData.phoneNumber}
      //   onChange={handleInputChange("phoneNumber")}
      //   variant="filled"
      //   required={isRequired}
      //   error={hasError}
      //   sx={getTextFieldStyles("phoneNumber")}
      //   className="bg-white border-2 border-gray-300 rounded-md"
      //   size="small"
      // />

      <PhoneNumberInput
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handlePhoneInputChange}
        required={isRequired}
        setError={setPhoneError}
      />
    );
  };

  return (
    <div
      id="enquire-now"
      className={`${getContainerClasses()} ${className}`}
      style={
        viewType === "image" || viewType === "modal"
          ? {
              backgroundImage:
                "url(/images/one-residences/one_residences_3.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
            }
          : {}
      }
    >
      {/* Background overlay for image view */}
      {viewType === "image" && (
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      )}

      {/* Background overlay for banner view */}
      {viewType === "banner" && (
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      )}

      {/* Modal view background */}
      {viewType === "modal" && <div className="absolute inset-0 bg-black/30" />}

      <form
        onSubmit={handleSubmit}
        className={`${getFormWrapperClasses()} ${
          viewType === "image" || viewType === "modal" || viewType === "banner"
            ? "relative z-10"
            : ""
        }`}
      >
        {formName && <input type="hidden" name="formName" value={formName} />}
        {pointName && (
          <input type="hidden" name="pointName" value={pointName} />
        )}
        {formType && <input type="hidden" name="formType" value={formType} />}

        {renderFormTitle()}

        {viewType === "banner"
          ? renderBannerViewLayout()
          : viewType === "image"
            ? renderImageViewLayout()
            : renderDefaultLayout()}

        <div
          className={`${
            viewType === "image" || viewType === "banner"
              ? "hidden"
              : "text-center"
          } mt-6`}
        >
          {submitStatus.type && (
            <div
              className={`mb-4 p-4 rounded ${
                submitStatus.type === "success"
                  ? "bg-green-500/20 text-green-200 border border-green-500/50"
                  : "bg-red-500/20 text-red-200 border border-red-500/50"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
          {viewType !== "image" && viewType !== "banner" && (
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 rounded uppercase tracking-wider font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                viewType === "modal"
                  ? `bg-[${colorCodeBtnBg}] text-[${colorCodeBtnText}] hover:bg-[${colorCodeBtnHoverBg}]/90 border-2 border-[${colorCodeBtnBorder}]`
                  : `bg-[${colorCodeBtnBg}] dark:bg-gray-200 text-[${colorCodeBtnText}] dark:text-[#0f1f2e] hover:bg-white/90 dark:hover:bg-gray-300 border-2 border-[${colorCodeBtnBorder}] border-white`
              }`}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                color: colorCodeBtnText,
              }}
              onClick={() =>
                pushToDataLayer({
                  event: "button_click",
                  label: formName || "Contact Us",
                  value: formType || "Contact Us Form",
                })
              }
            >
              {isSubmitting ? "Sending..." : "SUBMIT"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
