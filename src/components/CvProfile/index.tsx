import classes from "./cvProfile.module.css";

import { TData } from "../App";

import { CvHeader } from "../CvHeader";
import { CvMain } from "../CvMain";

interface ICvProfile {
  personalData: TData[];
  educationalDatas: TData[];
  practicalDatas: TData[];
}

export const CvProfile: React.FC<ICvProfile> = (props) => {
  const { personalData, educationalDatas, practicalDatas } = props;

  return (
    <div className={classes.profile}>
      <CvHeader personalData={personalData}></CvHeader>
      <CvMain
        educationalDatas={educationalDatas}
        practicalDatas={practicalDatas}
      ></CvMain>
    </div>
  );
};
