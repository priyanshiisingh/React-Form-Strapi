import React, { useState } from "react";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Label, Div, ReqSpan } from "../../assets/styles/InputStyles";
import { ErrorDiv } from "../../assets/styles/ErrorStyles";

import { CVInput, CVLabel, CVsvg, CVDiv } from "../../assets/styles/CVStyles";

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

interface CVInputProps {
  label: string;
  type: any;
  placeholder: string;
  register: UseFormRegister<FormProps>;
  registerInput: any;
  validations: any;
  errors: FieldErrors<FormProps>;
}

const CVInputField = ({
  label,
  type,
  placeholder,
  registerInput,
  validations,
  register,
  errors,
}: CVInputProps) => {
  var errorMsg = <></>;
  if (errors.resume && registerInput === "resume") {
    errorMsg = (
      <ErrorDiv>Maximum file size should be 5MB and format PDF only </ErrorDiv>
    );
  }

  const [upload, setUpload] = useState(false);
  function fileUpload() {
    setUpload(true);
  }

  return (
    <div>
      <Div>
        <Label htmlFor={label}>
          {label}
          <ReqSpan>✱</ReqSpan>
        </Label>

        <CVDiv>
          <CVLabel className="btn" htmlFor={label} onChange={fileUpload}>
            <CVsvg width="15px" height="15px" viewBox="0 0 16 16">
              <path d="M5 5V9C5 10.7 6.3 12 8 12C9.7 12 11 10.7 11 9V4.5C11 2 9 0 6.5 0C4 0 2 2 2 4.5V10C2 13.3 4.7 16 8 16C11.3 16 14 13.3 14 10V4H12V10C12 12.2 10.2 14 8 14C5.8 14 4 12.2 4 10V4.5C4 3.1 5.1 2 6.5 2C7.9 2 9 3.1 9 4.5V9C9 9.6 8.6 10 8 10C7.4 10 7 9.6 7 9V5H5Z" />
            </CVsvg>
            ATTACH RESUME/CV
          </CVLabel>
        </CVDiv>
        <div>
          <CVInput
            type={type}
            placeholder={placeholder}
            {...register(registerInput, validations)}
            id={label}
            onChange={fileUpload}
          />
        </div>
      </Div>
      {errorMsg}
      {upload === true ? <ErrorDiv>File uploaded</ErrorDiv> : <></>}
    </div>
  );
};

export default CVInputField;

/*
<div class="input-group">
  <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
</div>
*/
