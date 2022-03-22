import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

//styles
import {
  Form,
  DivBody,
  Heading,
  InputBtn,
  InputDiv,
  PPText,
  HR,
} from "../../assets/styles/FormStyles";
import { Div } from "../../assets/styles/CaptchaStyles";
import { ErrorDiv } from "../../assets/styles/ErrorStyles";

//components
import InputField from "../InputFields/InputFormat";
import CVInputField from "../RequiredFields/CVInput";
import InputReqField from "../RequiredFields/InputReqField";
import SelectOptions from "../SelectOptions/SelectOptionsFormat";
import { TextAreaField, PrePronounField } from "../TextArea/TextAreaFormat";

interface FormProps {
  resume: FileList;
  resumeURL: any;
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

const FormFormat = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<FormProps>();

  const [verifyCaptcha, setVerifyCaptcha] = useState(false);

  const onSubmit: SubmitHandler<FormProps> = async (formData) => {
    console.log(formData);

    const fileEntry = new FormData();
    fileEntry.append("files", formData.resume[0]);

    const fileUpload = await fetch("http://localhost:1337/api/upload/", {
      method: "POST",
      body: fileEntry,
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));

    console.log("file upload", fileUpload);

    async function UploadForm(formData: any) {
      const newEntry = {
        resume: fileUpload[0],
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        currentCompany: formData.currentCompany,
        linkedInUrl: formData.linkedInUrl,
        twitterUrl: formData.twitterUrl,
        githubUrl: formData.githubUrl,
        portfolioUrl: formData.portfolioUrl,
        otherUrl: formData.otherUrl,
        prePronouns: formData.prePronouns,
        addInfo: formData.addInfo,
        gender: formData.gender,
        race: formData.race,
        veteran: formData.veteran,
      };

      const addEntry = new FormData();
      addEntry.append("data", JSON.stringify(newEntry));
      await fetch("http://localhost:1337/api/applicants/", {
        method: "POST",
        body: addEntry,
      })
        .then((response) => response.json())
        .then((data) => console.log("data", data))
        .catch((err) => console.log(err));
    }
    if (verifyCaptcha === true) {
      UploadForm(formData);
    }
  };

  return (
    <DivBody>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Heading>SUBMIT YOUR APPLICATION</Heading>
        <div>
          {/* <URL registerURL={"resumeURL"} register={register} /> */}
          <CVInputField
            label={"Resume/CV"}
            type={"file"}
            registerInput={"resume"}
            register={register}
            placeholder={"attach file"}
            validations={{
              required: true,
              validate: {
                lessThan5MB: (files: any) =>
                  files[0]?.size < 5000000 || "Max 5MB",
                acceptedFormats: (files: any) =>
                  ["application/pdf"].includes(files[0]?.type) || "Only PDF",
              },
            }}
            errors={errors}
          />

          <InputReqField
            label={"Full name"}
            type={"text"}
            registerInput={"fullName"}
            register={register}
            placeholder={""}
            validations={{
              required: true,
              minLength: 10,
            }}
            errors={errors}
          />
          <InputReqField
            label="Email"
            type="email"
            registerInput={"email"}
            register={register}
            placeholder={""}
            validations={{ required: true }}
            errors={errors}
          />
          <InputField
            label="Phone"
            type={"text"}
            registerInput={"phone"}
            register={register}
            placeholder={""}
            validations={{
              required: false,
              // pattern: /(\+91\+( )\d{0,15})/,
              minLength: 10,
            }}
            errors={errors}
          />
          <InputField
            label="Current Company"
            type={"text"}
            registerInput={"currentCompany"}
            register={register}
            placeholder={""}
            validations={{ required: false }}
            errors={errors}
          />
          <Heading>LINKS</Heading>
          <InputField
            label="LinkedIn"
            type={"url"}
            registerInput={"linkedInUrl"}
            register={register}
            placeholder={""}
            validations={{
              required: false,
              pattern: /(https:\/\/)(www.linkedin\..*)/,
            }}
            errors={errors}
          />
          <InputField
            label="Twitter"
            type={"url"}
            registerInput={"twitterUrl"}
            register={register}
            placeholder={""}
            validations={{
              required: false,
              pattern: /(https:\/\/)(twitter\..*)/,
            }}
            errors={errors}
          />
          <InputField
            label="Github"
            type={"url"}
            registerInput={"githubUrl"}
            register={register}
            placeholder={""}
            validations={{
              required: false,
              pattern: /(https:\/\/)(github\..*)/,
            }}
            errors={errors}
          />
          <InputField
            label="Portfolio"
            type={"url"}
            registerInput={"portfolioUrl"}
            register={register}
            placeholder={""}
            validations={{ required: false }}
            errors={errors}
          />

          <InputField
            label="Other"
            type={"url"}
            registerInput={"otherUrl"}
            register={register}
            placeholder={""}
            validations={{ required: false }}
            errors={errors}
          />
        </div>
        <div>
          <Heading>PREFFERED PRONOUNS</Heading>
          <PPText>If you'd like, please share your pronouns with us.</PPText>
          <PrePronounField
            type="text"
            registerPrePronouns={"prePronouns"}
            register={register}
            placeholder={"Type your response"}
            validations={{ required: false }}
          />
          <Heading>ADDITIONAL INFORMATION</Heading>
          <TextAreaField
            registerTextArea={"addInfo"}
            register={register}
            placeholder={
              "Add a cover letter or anything else you want to share"
            }
            validations={{ required: false, minLength: 30 }}
            errors={errors}
          />
        </div>
        <HR />
        <div>
          <Heading>
            U.S. EQUAL EMPLOYMENT OPPORTUNITY INFORMATION{" "}
            <span>
              (Completion is voluntary and will not subject you to adverse
              treatment)
            </span>
          </Heading>
        </div>

        <PPText>
          Our company values diversity. To ensure that we comply with reporting
          requirements and to learn more about how we can increase diversity in
          our candidate pool, we invite you to voluntarily provide demographic
          information in a confidential survey at the end of this application.
          Providing this information is optional. It will not be accessible or
          used in the hiring process, and has no effect on your opportunity for
          employment.
        </PPText>
        <SelectOptions
          opKey={"s1"}
          label={"Gender"}
          uqname={"gender"}
          options={["Female", "Male", "Other"]}
          registerOptions={"gender"}
          register={register}
        />
        <SelectOptions
          opKey={"s2"}
          label={"Race"}
          uqname={"race"}
          options={[
            "Hispanic or Latino",
            "White (Not Hispanic or Latino)",
            "Black or African American (Not Hispanic or Latino)",
            "Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)",
            "Asian (Not Hispanic or Latino)",
            "American Indian or Alaska Native (Not Hispanic or Latino)",
            "Two or More Races (Not Hispanic or Latino)",
            "Decline to self-identify",
          ]}
          registerOptions={"race"}
          register={register}
        />
        {/* Veteran Status Field  */}
        <SelectOptions
          opKey={"s3"}
          label={"Veteran Status"}
          uqname={"veteran-status"}
          options={[
            "I am a veteran",
            "I am not a veteran",
            "Decline to self identify",
          ]}
          registerOptions={"veteran"}
          register={register}
        />

        <Div>
          <ReCAPTCHA
            sitekey="6Lf9P9ceAAAAALwzKavZ_IkfDYrB30dJ6OaWsNBf"
            onChange={() => {
              setVerifyCaptcha(true);
            }}
          />
          {verifyCaptcha === true ? null : (
            <ErrorDiv>Verification Required</ErrorDiv>
          )}
        </Div>

        <InputDiv>
          <InputBtn type="submit" value="Submit Application" />
        </InputDiv>
      </Form>
    </DivBody>
  );
};

export default FormFormat;
