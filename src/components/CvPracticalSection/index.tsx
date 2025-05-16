import classes from "./practicalSection.module.css";

import { TData } from "../App";

import { CvTitleSection } from "../CvTitleSection";
import { DateLocation } from "../DateLocation";
import { PracticalCard } from "../PracticalCard";

interface ICvPracticalSectionProps {
  practicalDatas: TData[];
}

export const CvPracticalSection: React.FC<ICvPracticalSectionProps> = (
  props,
) => {
  const { practicalDatas } = props;

  return (
    <div>
      <CvTitleSection title="Practical" />
      {practicalDatas.map((data) => {
        return (
          <div className={classes.practicalItem} key={data.id}>
            <DateLocation
              startDate={data.sdate}
              endDate={data.edate}
              location={data.location}
            />
            <PracticalCard
              name={data.company}
              position={data.position}
              description={data.desc}
            />
          </div>
        );
      })}
    </div>
  );
};
