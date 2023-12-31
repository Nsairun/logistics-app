import React, { ChangeEvent, useState } from "react";

interface SelectDropdownProps {
  options: string[];
  selectedValue: string;
  onChange: (value: string) => void;
}
const SelectDropdown: React.FC<SelectDropdownProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <select
      value={selectedValue}
      onChange={handleSelectChange}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px",
        width: "{12vw, 100%}",
        borderRadius: "5px",
        color: "#000",
        fontSize: "12px",
        backgroundColor: "#d9d9d9",
        cursor: "pointer",
      }}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectDropdown;
