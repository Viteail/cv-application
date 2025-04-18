import Icon from "@mdi/react";
import { mdiPencil } from "@mdi/js";

import classes from "./card.module.css";

import { Button } from "../Button";

interface ICardProps {
  title: string;
}

export const Card: React.FC<ICardProps> = (props) => {
  const { title } = props;
  return (
    <div className={classes.card}>
      <div className={classes.title}>{title}</div>
      <Button leftIcon={<Icon path={mdiPencil} size={1} />}></Button>
    </div>
  );
};
