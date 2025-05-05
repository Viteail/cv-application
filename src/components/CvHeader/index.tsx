import classes from "./header.module.css";

import { TData } from "../App";

interface ICvHeaderProps {
  personalData: TData[];
}

export const CvHeader: React.FC<ICvHeaderProps> = (props) => {
  const { personalData } = props;

  let [person] = personalData;

  if (!person) {
    person = { fname: "", email: "", phone: "", adress: "", id: "" };
  }

  return (
    <div className={classes.header}>
      <div className={classes.name}>{person.fname}</div>
      <div className={classes.detailsWrapper}>
        <div>{person.email}</div>
        <div>{person.phone}</div>
        <div>{person.adress}</div>
      </div>
    </div>
  );
};
