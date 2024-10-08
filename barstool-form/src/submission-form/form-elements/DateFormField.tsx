// DateInput.tsx
import React from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import "../SubmissionForm.css";

interface DateInputProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: any;
  validationRules?: RegisterOptions;
}

const DateInput: React.FC<DateInputProps> = ({
  label,
  name,
  register,
  errors,
  validationRules,
}) => {
  return (
    <div className="form-field">
      <label>
        {label}
        <input {...register(name, validationRules)} type="date" id={name} />
      </label>
      <span className="error">{errors?.[name]?.message}</span>
    </div>
  );
};

export default DateInput;
