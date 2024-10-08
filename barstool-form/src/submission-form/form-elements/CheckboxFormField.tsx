// CheckboxInput.tsx
import React from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import "../SubmissionForm.css";

interface CheckboxInputProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: any;
  validationRules?: RegisterOptions;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  label,
  name,
  register,
  errors,
  validationRules,
}) => {
  return (
    <div className="form-field checkbox">
      <label className="checkbox-label">
        <input {...register(name, validationRules)} type="checkbox" id={name} />
        {label}
      </label>
      <span className="error">{errors?.[name]?.message}</span>
    </div>
  );
};

export default CheckboxInput;
