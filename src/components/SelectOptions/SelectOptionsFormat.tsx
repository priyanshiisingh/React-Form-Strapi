import React from "react";
import {
  FieldErrors,
  Path,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { useState } from "react";
import "../../assets/styles/Racedropdown.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { Label, Div, IDiv } from "../../assets/styles/InputStyles";
import { Option, Select, SVG } from "../../assets/styles/SelectOpStyles";

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

enum GenderEnum {
  female = "Female",
  male = "Male",
  other = "Other",
}
enum Race {
  hispanic = "Hispanic or Latino",
  white = "White (Not Hispanic or Latino)",
  black = "Black or African American (Not Hispanic or Latino)",
  hawaiian = "Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)",
  asian = "Asian (Not Hispanic or Latino)",
  american = "American Indian or Alaska Native (Not Hispanic or Latino)",
  mixed = "Two or More Races (Not Hispanic or Latino)",
  decline = "Decline to self-identify",
}

enum Veteran {
  veteran = "I am a veteran",
  notVeteran = "I am not a veteran",
  decline = "Decline to self identify",
}

interface SelectOptionsProps {
  opKey: string;
  uqname: string;
  label: string;
  options: string[];
  registerOptions: any;
  register: UseFormRegister<FormProps>;
}

const SelectOptions = ({
  opKey,
  uqname,
  label,
  options,
  register,
  registerOptions,
}: SelectOptionsProps) => {
  const { handleSubmit } = useForm<SelectOptionsProps>();
  const [raceInfo, setRaceInfo] = useState(false);

  return (
    <div>
      <Div>
        {/* <Label htmlFor={uqname}>{label}</Label> */}

        <div className="lcon">
          <Label htmlFor={uqname}>{label}</Label>
          {uqname === "race" ? (
            <label htmlFor="dropdown">
              <span onClick={() => setRaceInfo(!raceInfo)}>
                <SVG viewBox="0 0 16 16">
                  <path d="M2.34372 13.6571C-0.781242 10.5328 -0.781242 5.46508 2.34373 2.34174C5.46662 -0.780571 10.5323 -0.780571 13.6562 2.34168C16.7812 5.4651 16.7812 10.5348 13.6563 13.6571C10.5331 16.7808 5.46724 16.7811 2.34372 13.6571ZM3.03656 12.9639C5.77735 15.7051 10.2226 15.7048 12.9633 12.9637C15.7052 10.2242 15.7052 5.77554 12.9632 3.03502C10.2221 0.295293 5.77669 0.295293 3.03645 3.03502C0.294472 5.77556 0.294472 10.2223 3.03656 12.9639Z" />
                  <path d="M9 7H7V12H9V7Z" />
                  <path d="M8 6C8.55228 6 9 5.55228 9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z" />
                </SVG>
              </span>
            </label>
          ) : (
            <></>
          )}
        </div>
        <IDiv>
          <Select id={uqname} {...register(registerOptions)}>
            <Option value="">Select...</Option>
            {/*default selct*/}
            {options.map((value, num) => {
              return (
                <Option key={opKey + num} value={value}>
                  {value}
                </Option>
              );
            })}
          </Select>
          {uqname === "race" ? (
            <ul className="mainUl">
              <li>
                {/* <label htmlFor="dropdown"></label> */}
                <input type="checkbox" id="dropdown" />
                <ul className="subUl">
                  <li className="subLi">
                    <h5>Hispanic or Latino</h5>
                    <p>
                      A person of Cuban, Mexican, Puerto Rican, South or Central
                      American, or other Spanish culture or origin regardless of
                      race.
                    </p>
                    <h5>White (Not Hispanic or Latino)</h5>
                    <p>
                      A person having origins in any of the original peoples of
                      Europe, the Middle East, or North Africa.
                    </p>
                    <h5>Black or African American (Not Hispanic or Latino)</h5>
                    <p>
                      A person having origins in any of the black racial groups
                      of Africa.
                    </p>
                    <h5>
                      Native Hawaiian or Other Pacific Islander (Not Hispanic or
                      Latino)
                    </h5>
                    <p>
                      A person having origins in any of the peoples of Hawaii,
                      Guam, Samoa, or other Pacific Islands.
                    </p>
                    <h5>Asian (Not Hispanic or Latino)</h5>
                    <p>
                      A person having origins in any of the original peoples of
                      the Far East, Southeast Asia, or the Indian Subcontinent,
                      including, for example, Cambodia, China, India, Japan,
                      Korea, Malaysia, Pakistan, the Philippine Islands,
                      Thailand, and Vietnam.
                    </p>
                    <h5>
                      American Indian or Alaska Native (Not Hispanic or Latino)
                    </h5>
                    <p>
                      A person having origins in any of the original peoples of
                      North and South America (including Central America), and
                      who maintain tribal affiliation or community attachment.
                    </p>
                    <h5>Two or More Races (Not Hispanic or Latino)</h5>
                    <p>
                      All persons who identify with more than one of the above
                      five races.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          ) : (
            <></>
          )}
        </IDiv>
      </Div>
    </div>
  );
};

export default SelectOptions;
