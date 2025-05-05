import { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";

import classes from "./app.module.css";

import { Section } from "../Section";
import { CvProfile } from "../CvProfile";
import { Form } from "../Form";
import { Button } from "../Button";
import { CardList, TOnEdit } from "../CardList";

import { FORM_MAP } from "../Form/formConfigs";
import { isNotMatchingId } from "./utils";
import {
  getEducationExampleData,
  getPersonalExampleData,
  getPracticalExampleData,
} from "./mockData";

export type TData = Record<string, string>;
export type TIndexActive = number | null;
export type TActiveKey = string | null;

export const App: React.FC = () => {
  const [isindexActive, setIndexActive] = useState<TIndexActive>(null);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const [personalData, setPersonalData] = useState<TData[]>([]);
  const [educationalDatas, setEducationalDatas] = useState<TData[]>([]);
  const [practicalDatas, setPracticalDatas] = useState<TData[]>([]);

  useEffect(() => {
    if (personalData.length === 0)
      setPersonalData([getPersonalExampleData()]);
    if (educationalDatas.length === 0)
      setEducationalDatas([getEducationExampleData()]);
    if (practicalDatas.length === 0)
      setPracticalDatas([getPracticalExampleData()]);
  }, []);
  console.log(personalData, educationalDatas, practicalDatas);

  console.log("pula", activeKey);
  console.log("cns", isindexActive);

  const handleEditForm: TOnEdit = (key) => {
    setActiveKey(key);
    setIndexActive(null);
  };

  return (
    <>
      <div className={classes.sectionWrapper}>
        <Section text="Personal Details">
          {personalData.length > 0 &&
            isindexActive !== 0 &&
            isNotMatchingId(personalData, activeKey) && (
              <CardList
                onEdit={(key) => handleEditForm(key)}
                type="personal"
                datas={personalData}
              ></CardList>
            )}
          {personalData.map((data) => {
            return (
              data.id === activeKey && (
                <Form
                  key={data.id}
                  onClickDeactivate={() => setActiveKey(null)}
                  dataState={{ datas: personalData, setData: setPersonalData }}
                  inputs={FORM_MAP.personal}
                  dataInput={data}
                ></Form>
              )
            );
          })}
          {isindexActive === 0 && (
            <Form
              onClickDeactivate={() => setIndexActive(null)}
              dataState={{ datas: personalData, setData: setPersonalData }}
              inputs={FORM_MAP.personal}
            ></Form>
          )}
          {personalData.length === 0 && (
            <Button
              leftIcon={<Icon path={mdiPlus} size={1} />}
              onClick={() => {
                setActiveKey(null);
                setIndexActive(0);
              }}
            >
              Add
            </Button>
          )}
        </Section>
        <Section text="Educational Experience">
          {educationalDatas.length > 0 &&
            isindexActive !== 1 &&
            isNotMatchingId(educationalDatas, activeKey) && (
              <CardList
                onEdit={(key) => handleEditForm(key)}
                type="educational"
                datas={educationalDatas}
              ></CardList>
            )}
          {educationalDatas.map((data) => {
            return (
              data.id === activeKey && (
                <Form
                  key={data.id}
                  onClickDeactivate={() => setActiveKey(null)}
                  dataState={{
                    datas: educationalDatas,
                    setData: setEducationalDatas,
                  }}
                  inputs={FORM_MAP.educational}
                  dataInput={data}
                ></Form>
              )
            );
          })}
          {isindexActive === 1 && (
            <Form
              onClickDeactivate={() => setIndexActive(null)}
              dataState={{
                datas: educationalDatas,
                setData: setEducationalDatas,
              }}
              inputs={FORM_MAP.educational}
            ></Form>
          )}
          <Button
            leftIcon={<Icon path={mdiPlus} size={1} />}
            onClick={() => {
              if (!isNotMatchingId(educationalDatas, activeKey)) return;
              setActiveKey(null);
              setIndexActive(1);
            }}
          >
            Experience
          </Button>
        </Section>
        <Section text="Practical Experience">
          {practicalDatas.length > 0 &&
            isindexActive !== 2 &&
            isNotMatchingId(practicalDatas, activeKey) && (
              <CardList
                onEdit={(key) => handleEditForm(key)}
                type="practical"
                datas={practicalDatas}
              ></CardList>
            )}
          {practicalDatas.map((data) => {
            return (
              data.id === activeKey && (
                <Form
                  key={data.id}
                  onClickDeactivate={() => setActiveKey(null)}
                  dataState={{
                    datas: practicalDatas,
                    setData: setPracticalDatas,
                  }}
                  inputs={FORM_MAP.practical}
                  dataInput={data}
                ></Form>
              )
            );
          })}
          {isindexActive === 2 && (
            <Form
              onClickDeactivate={() => setIndexActive(null)}
              dataState={{ datas: practicalDatas, setData: setPracticalDatas }}
              inputs={FORM_MAP.practical}
            ></Form>
          )}
          <Button
            leftIcon={<Icon path={mdiPlus} size={1} />}
            onClick={() => {
              if (!isNotMatchingId(practicalDatas, activeKey)) return;
              setActiveKey(null);
              setIndexActive(2);
            }}
          >
            Experience
          </Button>
        </Section>
      </div>
      <CvProfile
        personalData={personalData}
        educationalDatas={educationalDatas}
        practicalDatas={practicalDatas}
      ></CvProfile>
    </>
  );
};
