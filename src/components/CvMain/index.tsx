import classes from './cvMain.module.css';

import { TData } from "../App";

import { CvEducationSection } from "../CvEducationSection";
import { CvPracticalSection } from "../CvPracticalSection";

interface ICvMainProps {
  educationalDatas: TData[];
  practicalDatas: TData[];
}

export const CvMain: React.FC<ICvMainProps> = (props) => {
  const { educationalDatas, practicalDatas } = props;

  return (
    <div className={classes.main}>
      <CvEducationSection educationalDatas={educationalDatas} />
      <CvPracticalSection practicalDatas={practicalDatas} />
    </div>
  );
};
