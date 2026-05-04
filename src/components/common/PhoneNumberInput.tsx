"use client";

import React, { useState, useRef, useEffect } from "react";
import IntlTelInput from "@intl-tel-input/react";
import "intl-tel-input/styles";

const geoIpLookup = async () => {
  const res = await fetch("https://ipapi.co/json");
  const data = await res.json();
  return data.country_code;
};

const PhoneNumberInput = ({
  name,
  value,
  onChange,
  required = true,
  setError,
}) => {
  const itiRef = useRef<any>(null);
  const [number, setNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [errorCode, setErrorCode] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const validatePhone = (errorCode: number | null) => {
    if (number.trim() == "") return "Invalid number";
    if (errorCode == null) return "";
    if (isValid) return true;
    const errorsMap = {
      0: "Invalid number",
      1: "Invalid country code",
      2: "Too short",
      3: "Too long",
      4: "Invalid number",
    };
    return errorsMap[errorCode] || "Invalid phone number";
  };

  let invalidMsg = "";
  if (!isValid) {
    invalidMsg = validatePhone(errorCode);
  }

  const handleChangeNumber = (num) => {
    setNumber(num);
    onChange(num);
    setError(invalidMsg);
  };

  useEffect(() => {
    setError(invalidMsg);
  }, [isValid]);

  const hasError = showValidation && errorCode != null && !isValid;

  const focusInput = () => {
    const input = itiRef.current?.getInstance();
    input?.["#ui"]?.telInputEl?.focus();
    // setIsFocus(true);
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
            className: `
              w-full bg-transparent outline-none text-[14px] text-gray-800 px-2 pb-1 outline-none
            `,
          }}
        />
      </div>

      {hasError && <p className="mt-1 text-xs text-red-500">{invalidMsg}</p>}
    </div>
  );
};

export default PhoneNumberInput;
