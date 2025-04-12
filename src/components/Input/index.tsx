import classes from "./input.module.css";

import { IInputProps } from "../Form";


export const Input: React.FC<IInputProps> = (props) => {
  const { text, name, value, type } = props;

  return (
    <div className={classes.inputWrapper}>
      <label>{text}</label>
      <input name={name} type={type} defaultValue={value} required />
    </div>
  );
};
