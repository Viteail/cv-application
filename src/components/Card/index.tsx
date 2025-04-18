import Icon from "@mdi/react";
import { mdiPencil } from "@mdi/js";

import classes from "./card.module.css";

import { Button } from "../Button";

interface ICardProps {
  title: string;
  onEdit: () => void;
}

export const Card: React.FC<ICardProps> = (props) => {
  const { title, onEdit } = props;
  return (
    <div className={classes.card}>
      <div className={classes.title}>{title}</div>
      <Button
        onClick={onEdit}
        leftIcon={<Icon path={mdiPencil} size={1} />}
      ></Button>
    </div>
  );
};
