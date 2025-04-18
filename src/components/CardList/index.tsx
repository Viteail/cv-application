import classes from "./cardList.module.css";

import { Card } from "../Card";

import { TData } from "../App";

interface ICardListProps {
  type: string;
  dataState: {
    datas: TData[];
    setData: React.Dispatch<React.SetStateAction<TData[]>>;
  };
}

export const CardList: React.FC<ICardListProps> = (props) => {
  const { dataState, type } = props;
  const { datas } = dataState;

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

        return <Card key={data.id} title={title}></Card>;
      })}
    </div>
  );
};
