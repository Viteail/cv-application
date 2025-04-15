import { useState } from "react";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";

import classes from "./app.module.css";

import { Section } from "../Section";
import { CvProfile } from "../CvProfile";
import { Form } from "../Form";
import { Button } from "../Button";
import { Card } from "../Card";

export type TData = Record<string, string>;

const PERSONAL_FORM = [
  { text: "Full Name", name: "fname", value: "", type: "text" },
  { text: "Email", name: "email", value: "", type: "email" },
  { text: "Phone", name: "phone", value: "", type: "tel" },
  { text: "Adress", name: "adress", value: "", type: "text" },
];

const EDUCATIONAL_FORM = [
  { text: "School", name: "school", value: "", type: "text" },
  { text: "Degree", name: "degree", value: "", type: "text" },
  { text: "Start Date", name: "sdate", value: "", type: "text" },
  { text: "End Date", name: "edate", value: "", type: "text" },
  { text: "Location", name: "location", value: "", type: "text" },
];

const PRACTICAL_FORM = [
  { text: "Company Name", name: "company", value: "", type: "text" },
  { text: "Position Title", name: "position", value: "", type: "text" },
  { text: "Start Date", name: "sdate", value: "", type: "text" },
  { text: "End Date", name: "edate", value: "", type: "text" },
  { text: "Location", name: "location", value: "", type: "text" },
  { text: "Description", name: "desc", value: "", type: "text" },
];

export const App: React.FC = () => {
  const [isindexActive, setIndexActive] = useState<number | null>(null);
  const [personalData, setPersonalData] = useState<TData>(
    PERSONAL_FORM.reduce((acc, curr) => ({ ...acc, [curr.name]: "" }), {}),
  );
  const [educationalDatas, setEducationalDatas] = useState<TData[]>([]
    // EDUCATIONAL_FORM.reduce((acc, curr) => ({ ...acc, [curr.name]: "" }), {}),
  );
  const [practicalDatas, setPracticalDatas] = useState<TData[]>([]
    // PRACTICAL_FORM.reduce((acc, curr) => ({ ...acc, [curr.name]: "" }), {}),
  );

  console.log(personalData, educationalDatas, practicalDatas)

  const handleIndexActivate = (index: number) => {
    return () => setIndexActive(index);
  };

  return (
    <>
      <div className={classes.sectionWrapper}>
        <Section text="Persona Details">
          {isindexActive === 0 && (
            <Form
              dataState={{ data: personalData, setData: setPersonalData }}
              inputs={PERSONAL_FORM}
            ></Form>
          )}
          <Button
            leftIcon={<Icon path={mdiPlus} size={1} />}
            onClick={handleIndexActivate(0)}
          >
            Add
          </Button>
        </Section>
        <Section text="Educational Experience">
          {isindexActive === 1 && (
            <Form
              dataState={{ data: educationalDatas, setData: setEducationalDatas }}
              inputs={EDUCATIONAL_FORM}
            ></Form>
          )}
          <Button
            leftIcon={<Icon path={mdiPlus} size={1} />}
            onClick={handleIndexActivate(1)}
          >
            Experience
          </Button>
        </Section>
        <Section text="Practical Experience">
          {isindexActive === 2 && (
            <Form
              dataState={{ data: practicalDatas, setData: setPracticalDatas }}
              inputs={PRACTICAL_FORM}
            ></Form>
          )}
          <Button
            leftIcon={<Icon path={mdiPlus} size={1} />}
            onClick={handleIndexActivate(2)}
          >
            Experience
          </Button>
        </Section>
      </div>
      <CvProfile></CvProfile>
    </>
  );
};
