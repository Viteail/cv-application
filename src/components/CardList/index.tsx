import classes from "./cardList.module.css";

import { Card } from "../Card";

import { TData } from "../App";

export type TOnEdit = (key: string) => void;

interface ICardListProps {
  type: string;
  datas: TData[];
  onEdit: TOnEdit;
}

export const CardList: React.FC<ICardListProps> = (props) => {
  const { datas, type, onEdit } = props;

  let title = "";

  return (
    <div className={classes.cardList}>
      {datas.map((data) => {
        switch (type) {
          case "personal":
            title = data.fname;
            break;
          case "educational":
            title = data.school;
            break;
          case "practical":
            title = data.company;
        }

        return (
          <Card
            key={data.id}
            title={title}
            onEdit={() => onEdit(data.id)}
          ></Card>
        );
      })}
    </div>
  );
};
