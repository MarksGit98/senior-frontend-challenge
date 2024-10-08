import React, { useState } from "react";
import { nameRegex, US_STATES, isValidEmail, isValidDOB } from "./utils";
import { useForm, SubmitHandler } from "react-hook-form";
import TextFormInput from "./form-elements/TextFormField";
import SelectFormInput from "./form-elements/SelectFormField";
import DateFormInput from "./form-elements/DateFormField";
import CheckboxFormInput from "./form-elements/CheckboxFormField";
import "./SubmissionForm.css";

type FormFields = {
  fName: string;
  lName: string;
  email: string;
  state: string;
  agreement: boolean;
  dob: string;
};

const SubmissionForm = () => {
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log("Data", data);
    try {
      //For the sake of the coding assignment I defaulted the response value to True to display a
      //Success Message to the user.
      const response =
        true ||
        (await fetch("https://barstool-submission.com/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }));

      if (!response) {
        throw new Error("Error submitting registration.");
      }
      setIsFormSubmitted(true);
      setSubmissionMessage(
        "Your form has been successfully submitted. You will hear back shortly."
      );
    } catch (error) {
      setError("root", {
        message:
          "An error occurred while submitting the form. Please try again.",
      });
      setSubmissionMessage(
        "An error occurred while submitting the form. Please try again."
      );
      setIsFormSubmitted(false);
    }
  };

  return (
    <div className="form-content">
      <h2 className="form-title">Registration Form</h2>
      {!submissionMessage ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextFormInput
            label="First Name"
            name="fName"
            placeholder="Jane"
            register={register}
            errors={errors}
            validationRules={{
              required: "First Name is required",
              pattern: {
                value: nameRegex,
                message: "Invalid name format",
              },
            }}
          />

          <TextFormInput
            label="Last Name"
            name="lName"
            placeholder="Doe"
            register={register}
            errors={errors}
            validationRules={{
              required: "Last Name is required",
              pattern: {
                value: nameRegex,
                message: "Invalid name format",
              },
            }}
          />

          <TextFormInput
            label="Email"
            name="email"
            type="email"
            placeholder="jane.doe@example.com"
            register={register}
            errors={errors}
            validationRules={{
              required: "Email is required",
              validate: (value) => isValidEmail(value),
            }}
          />

          <SelectFormInput
            label="State"
            name="state"
            options={US_STATES}
            register={register}
            errors={errors}
            validationRules={{
              required: "State is required",
            }}
          />

          <DateFormInput
            label="Date of Birth"
            name="dob"
            register={register}
            errors={errors}
            validationRules={{
              required: "Date of Birth is required",
              validate: (value: string) => isValidDOB(value),
            }}
          />

          <CheckboxFormInput
            label="I agree to the terms and conditions"
            name="agreement"
            register={register}
            errors={errors}
            validationRules={{
              required: "You must agree to the terms and conditions",
            }}
          />

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      ) : (
        <div className={isFormSubmitted ? "success-message" : "error-message"}>
          <p>{submissionMessage}</p>
        </div>
      )}
    </div>
  );
};

export default SubmissionForm;
