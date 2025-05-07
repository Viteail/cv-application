import classes from "./dateLocation.module.css";

interface IDateLocationProps {
  startDate: string;
  endDate: string;
  location: string;
}

export const DateLocation: React.FC<IDateLocationProps> = (props) => {
  const { startDate, endDate, location } = props;

  return (
    <div className={classes.dateLocation}>
      <div className={classes.date}>
        {startDate} - {endDate}
      </div>
      <div className={classes.location}>{location}</div>
    </div>
  );
};
