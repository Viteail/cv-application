import { useState } from "react";

import classes from "./cardList.module.css";

import { Form } from "../Form";
import { Card } from "../Card";

import { TData } from "../App";
import { IInputProps } from "../Form";

interface ICardListProps {
  type: string;
  dataState: {
    datas: TData[];
    setData: React.Dispatch<React.SetStateAction<TData[]>>;
  };
  inputs: IInputProps[];
}

export const CardList: React.FC<ICardListProps> = (props) => {
  const [cardFormActive, setCardFormActive] = useState<string | null>(null);

  const { dataState, type, inputs } = props;
  const { datas } = dataState;

  let title = "";

  return (
    <div className={classes.cardList}>
      {cardFormActive === null ? (
        datas.map((data) => {
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
              onEdit={() => setCardFormActive(data.id)}
            ></Card>
          );
        })
      ) : (
        <Form
          onClickDeactivate={() => setCardFormActive(null)}
          dataState={dataState}
          inputs={inputs}
          dataInput={datas.find(data => data.id === cardFormActive)}
        ></Form>
      )}
    </div>
  );
};
