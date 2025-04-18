import { Input } from "../Input";
import { Button } from "../Button";

import classes from "./form.module.css";

import { TData } from "../App";

export interface IInputProps {
  text: string;
  name: string;
  value: string;
  type: React.HTMLInputTypeAttribute;
}

export interface IFormProps {
  inputs: IInputProps[];
  dataState: {
    datas: TData[];
    setData: React.Dispatch<React.SetStateAction<TData[]>>;
  };
  dataInput?: TData;
  onClickDeactivate: () => void; 
}

export const Form: React.FC<IFormProps> = (props) => {
  const { inputs, dataState, dataInput = null, onClickDeactivate } = props;
  const { datas, setData } = dataState;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const formValues = Object.fromEntries(
          Array.from(formData.entries()).map(([key, value]) => [
            key,
            value.toString(),
          ]),
        );

        formValues.id = crypto.randomUUID();

        const updatedData = [...datas, formValues] as TData[];
        setData(updatedData);

        onClickDeactivate();
      }}
      className={classes.form}
    >
      {inputs.map((input) => (
        <Input
          key={input.name}
          {...input}
          value={dataInput === null ? "" : dataInput[input.name]}
        ></Input>
      ))}
      <Button variant="delete">Delete</Button>
      <div className={classes.formBtnWrapper}>
        <Button variant="cancel">Cancel</Button>
        <Button type="submit" variant="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};
