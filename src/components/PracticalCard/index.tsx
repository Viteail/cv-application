import classes from './practicalCard.module.css'

interface IPracticalCardProps {
  name: string;
  position: string;
  description: string;
}

export const PracticalCard: React.FC<IPracticalCardProps> = (props) => {
  const { name, position, description } = props;
  return (
    <div className={classes.practicalCard}>
      <div className={classes.name}>{name}</div>
      <div className={classes.position}>{position}</div>
      <div className={classes.description}>{description}</div>
    </div>
  );
};
