import classes from "./header.module.css";

import Icon from "@mdi/react";
import { mdiEmail, mdiMapMarker, mdiPhone } from "@mdi/js";

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
        <div>
          <Icon path={mdiEmail} size={1}></Icon>
          {person.email}
        </div>
        <div>
          <Icon path={mdiPhone} size={1}></Icon>
          {person.phone}
        </div>
        <div>
          <Icon path={mdiMapMarker} size={1}></Icon>
          {person.adress}
        </div>
      </div>
    </div>
  );
};
