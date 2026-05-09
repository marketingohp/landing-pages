"use client";

import IntlTelInput from "@intl-tel-input/react";
import "intl-tel-input/styles";
import { useEffect, useRef, useState } from "react";

const geoIpLookup = async (): Promise<string> => {
  const res = await fetch("https://ipapi.co/json");
  const data = await res.json();
  return data.country_code;
};

type PhoneNumberInputProps = {
  name: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  setError: (error: string) => void;
};

const errorsMap: Record<number, string> = {
  0: "Invalid number",
  1: "Invalid country code",
  2: "Too short",
  3: "Too long",
  4: "Invalid number",
};

const PhoneNumberInput = ({
  name,
  value,
  onChange,
  required = true,
  setError,
}: PhoneNumberInputProps) => {
  const itiRef = useRef<any>(null);
  const [number, setNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [errorCode, setErrorCode] = useState<number | null>(null);
  const [isFocus, setIsFocus] = useState(false);

  const validatePhone = (code: number | null): string => {
    if (number.trim() === "") return "Invalid number";
    if (code == null || isValid) return "";
    return errorsMap[code] ?? "Invalid phone number";
  };

  const invalidMsg = !isValid ? validatePhone(errorCode) : "";

  const handleChangeNumber = (num: string) => {
    setNumber(num);
    onChange(num);
    setError(invalidMsg);
  };

  useEffect(() => {
    setError(invalidMsg);
  }, [isValid]);

  const hasError = showValidation && errorCode != null && !isValid;

  const focusInput = () => {
    const instance = itiRef.current?.getInstance();
    (instance?.["#ui"]?.telInputEl as HTMLInputElement | undefined)?.focus();
  };

  const handleBlur = () => {
    setShowValidation(true);
    setIsFocus(false);
  };

  return (
    <div className="relative w-full">
      <div
        onClick={focusInput}
        className={`
          w-full pt-1 border border-b-2 rounded-t-sm bg-[#f0f0f0] cursor-text transition-colors
          ${
            hasError
              ? "border-red-500"
              : isFocus
                ? "border-gray-300 border-b-sky-600"
                : "border-gray-300"
          } text-gray-800
        `}
      >
        <span className="block text-[10px] text-gray-500 px-3 leading-none mb-1 pointer-events-none">
          Phone Number{required ? " *" : ""}
        </span>

        <IntlTelInput
          ref={itiRef}
          value={value}
          usePreciseValidation={true}
          onChangeNumber={handleChangeNumber}
          onChangeValidity={setIsValid}
          onChangeErrorCode={setErrorCode}
          initialCountry="auto"
          geoIpLookup={geoIpLookup}
          loadUtils={() => import("intl-tel-input/utils")}
          inputProps={{
            name,
            onFocus: () => setIsFocus(true),
            onBlur: handleBlur,
            className:
              "w-full bg-transparent outline-none text-[14px] text-gray-800 px-2 pb-1",
          }}
        />
      </div>

      {hasError && <p className="mt-1 text-xs text-red-500">{invalidMsg}</p>}
    </div>
  );
};

export default PhoneNumberInput;
