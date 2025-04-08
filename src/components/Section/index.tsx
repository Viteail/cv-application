import classes from './section.module.css'

import Icon from "@mdi/react";
import { Button } from "../Button";
import { mdiPlus } from "@mdi/js";
import { useState } from "react";

export interface ISectionProps {
  text: string;
  children: React.ReactNode;
}

export const Section: React.FC<ISectionProps> = (props) => {
  const [isActive, setActive] = useState(false);

  const { text, children } = props;
  return (
    <div className={classes.section}>
      <h2>{text}</h2>
      <Button
        onClickActivate={() => setActive(true)}
        leftIcon={<Icon path={mdiPlus} size={1} />}
      >
        Experience
      </Button>
      {isActive && children}
    </div>
  );
};
