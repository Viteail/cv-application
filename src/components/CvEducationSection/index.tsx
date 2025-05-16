import classes from "./educationSection.module.css";

import { TData } from "../App";

import { CvTitleSection } from "../CvTitleSection";
import { DateLocation } from "../DateLocation";
import { EducationCard } from "../EducationCard";

interface ICvEducationSectionProps {
  educationalDatas: TData[];
}

export const CvEducationSection: React.FC<ICvEducationSectionProps> = (
  props,
) => {
  const { educationalDatas } = props;

  return (
    <div>
      <CvTitleSection title="Education" />
      {educationalDatas.map((data) => {
        return (
          <div className={classes.educationItem} key={data.id}>
            <DateLocation
              startDate={data.sdate}
              endDate={data.edate}
              location={data.location}
            />
            <EducationCard name={data.school} degree={data.degree} />
          </div>
        );
      })}
    </div>
  );
};
