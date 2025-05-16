import classes from "./educationCard.module.css";

interface IEducationCardProps {
  name: string;
  degree: string;
}

export const EducationCard: React.FC<IEducationCardProps> = (props) => {
  const { name, degree } = props;

  return (
    <div className={classes.educationCard}>
      <div className={classes.name}>{name}</div>
      <div className={classes.degree}>{degree}</div>
    </div>
  );
};
