import React from "react";
import {
  FieldErrors,
  Path,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Label, Div, IDiv } from "../../assets/styles/InputStyles";
import { ErrorDiv } from "../../assets/styles/ErrorStyles";

interface FormProps {
  resume: FileList;
  resumeURL: string;
  fullName: string;
  email: string;
  phone: string;
  currentCompany: string;
  linkedInUrl: string;
  twitterUrl: string;
  githubUrl: string;
  portfolioUrl: string;
  otherUrl: string;
  prePronouns: string;
  addInfo: string;
  gender: string;
  race: string;
  veteran: string;
}

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<FormProps>;
  registerInput: any;
  validations: any;
  errors: FieldErrors<FormProps>;
}

const InputField = ({
  label,
  type,
  placeholder,
  registerInput,
  validations,
  register,
  errors,
}: InputProps) => {
  var errorMsg = <></>;
  if (errors.phone && registerInput === "phone") {
    errorMsg = <ErrorDiv>Enter valid phone number with country code</ErrorDiv>;
  } else if (errors.linkedInUrl && registerInput === "linkedInUrl") {
    errorMsg = <ErrorDiv>Enter valid url</ErrorDiv>;
  } else if (errors.twitterUrl && registerInput === "twitterUrl") {
    errorMsg = <ErrorDiv>Enter valid url</ErrorDiv>;
  } else if (errors.githubUrl && registerInput === "githubUrl") {
    errorMsg = <ErrorDiv>Enter valid url</ErrorDiv>;
  }

  return (
    <div>
      <Div>
        <Label htmlFor={label}>{label}</Label>
        <IDiv>
          <Input
            type={type}
            placeholder={placeholder}
            {...register(registerInput, validations)}
            id={label}
          />
        </IDiv>
      </Div>
      {errorMsg}
    </div>
  );
};

export default InputField;
