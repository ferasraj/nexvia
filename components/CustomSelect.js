"use client";

import Select from "react-select";

export default function CustomSelect({
  isAr,
  placeholder,
  options,
  instanceId,
}) {
  const selectStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "rgba(5, 8, 20, 0.7)",
      borderColor: state.isFocused
        ? "rgba(59,130,246,0.5)"
        : "rgba(255,255,255,0.1)",
      borderRadius: "1rem",
      minHeight: "52px",
      boxShadow: "none",
      color: "white",
      transition: "all .3s ease",
      "&:hover": {
        borderColor: "rgba(59,130,246,0.4)",
      },
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#0B1120",
      borderRadius: "1rem",
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.08)",
      zIndex: 50,
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "rgba(59,130,246,0.15)" : "#0B1120",
      color: "white",
      cursor: "pointer",
      padding: "8px 10px",
    }),
    singleValue: (base) => ({
      ...base,
      color: "white",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#9CA3AF",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#9CA3AF",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };

  return (
    <Select
      instanceId={instanceId}
      styles={selectStyles}
      isRtl={isAr}
      placeholder={placeholder}
      options={options}
      menuPlacement="top"
      // menuPosition="fixed"
    />
  );
}
