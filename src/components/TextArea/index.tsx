import classes from './textArea.module.css'

interface ITextAreaProps {
  text: string;
  name: string;
  value: string;
}

export const TextArea: React.FC<ITextAreaProps> = (props) => {
  const { text, name, value } = props;

  return (
    <div className={classes.textAreaWrapper}>
      <label>{text}</label>
      <textarea name={name} defaultValue={value} rows={5} required></textarea>
    </div>
  );
};
