// SelectInput.tsx
import React from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import "../SubmissionForm.css";

interface SelectInputProps {
  label: string;
  name: string;
  options: string[];
  register: UseFormRegister<any>;
  errors: any;
  validationRules?: RegisterOptions;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  options,
  register,
  errors,
  validationRules,
}) => {
  return (
    <div className="form-field">
      <label>
        {label}
        <select {...register(name, validationRules)} id={name} defaultValue="">
          <option value="" disabled>
            Select your state
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <span className="error">{errors?.[name]?.message}</span>
    </div>
  );
};

export default SelectInput;
