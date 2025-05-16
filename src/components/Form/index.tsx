import { Input } from "../Input";
import { Button } from "../Button";
import Icon from "@mdi/react";

import { mdiDelete } from "@mdi/js";

import { TextArea } from "../TextArea";

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

  const handleDelete = () => {
    if (dataInput !== null) {
      const index = datas.indexOf(dataInput);

      const changedData = [...datas];
      changedData.splice(index, 1);

      setData(changedData);
    }

    onClickDeactivate();
  };

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

        let updatedData = [...datas];

        if (dataInput !== null) {
          for (const [key, value] of Object.entries(formValues)) {
            dataInput[key] = value;
          }

          updatedData = [...datas];
        } else {
          formValues.id = crypto.randomUUID();

          updatedData = [...datas, formValues] as TData[];
        }
        setData(updatedData);

        onClickDeactivate();
      }}
      className={classes.form}
    >
      {inputs.map((input) =>
        input.name === "desc" ? (
          <TextArea
            key={input.name}
            text={input.text}
            name={input.name}
            value={dataInput === null ? "" : dataInput[input.name]}
          />
        ) : (
          <Input
            key={input.name}
            {...input}
            value={dataInput === null ? "" : dataInput[input.name]}
          ></Input>
        ),
      )}
      <div className={classes.formBtnWrapper}>
        <Button
          leftIcon={<Icon path={mdiDelete} size={0.8} />}
          onClick={handleDelete}
          variant="delete"
        >
          Delete
        </Button>
        <div className={classes.cancelSubmitWrapper}>
          <Button onClick={onClickDeactivate} variant="cancel">
            Cancel
          </Button>
          <Button type="submit" variant="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};
