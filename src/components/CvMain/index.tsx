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
    <div>
      <CvEducationSection
        educationalDatas={educationalDatas}
      ></CvEducationSection>
      <CvPracticalSection practicalDatas={practicalDatas}></CvPracticalSection>
    </div>
  );
};
