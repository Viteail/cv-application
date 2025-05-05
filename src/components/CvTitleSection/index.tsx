import classes from './titleSection.module.css'

interface ICvTitleSectionProps {
  title: string;
}

export const CvTitleSection : React.FC<ICvTitleSectionProps> = (props) => {
  const { title } = props;

  return <div className={classes.titleSection}>{title}</div>;
};
