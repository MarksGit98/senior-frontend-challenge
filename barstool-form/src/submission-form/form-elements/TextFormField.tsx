// TextInput.tsx
import React from "react";
import { UseFormRegister, RegisterOptions } from "react-hook-form";
import "../SubmissionForm.css";

interface TextInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  errors: any;
  validationRules?: RegisterOptions;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  errors,
  validationRules,
}) => {
  return (
    <div className="form-field">
      <label>
        {label}
        <input
          {...register(name, validationRules)}
          type={type}
          id={name}
          placeholder={placeholder}
        />
      </label>
      <span className="error">{errors?.[name]?.message}</span>
    </div>
  );
};

export default TextInput;
