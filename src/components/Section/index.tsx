import classes from "./section.module.css";

export interface ISectionProps {
  text: string;
  children: React.ReactNode;
}

export const Section: React.FC<ISectionProps> = (props) => {
  const { text, children } = props;
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>{text}</h2>
      {children}
    </div>
  );
};
