interface ICardProps {
  title: string;
}
 
export const Card : React.FC<ICardProps> = (props) => {
  const { title } = props;
  return <div>{title}</div>
}
