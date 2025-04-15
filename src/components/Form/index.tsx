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
    data: TData | TData[];
    setData:
      | React.Dispatch<React.SetStateAction<TData>>
      | React.Dispatch<React.SetStateAction<TData[]>>;
  };
}

export const Form: React.FC<IFormProps> = (props) => {
  const { inputs, dataState } = props;
  const { data, setData } = dataState;

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

        if (Array.isArray(data)) {
          const updatedData = [...data, formValues] as TData[];
          (setData as React.Dispatch<React.SetStateAction<TData[]>>)(updatedData);
        } else {
          const updatedData = { ...data } as TData;

          for (const [key, value] of Object.entries(formValues)) {
            updatedData[key] = value;
          }

          (setData as React.Dispatch<React.SetStateAction<TData>>)(updatedData);
        }
      }}
      className={classes.form}
    >
      {inputs.map((input) => (
        <Input key={input.name} {...input} value={data[input.name]}></Input>
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
