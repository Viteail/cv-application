interface IButtonProps {
  children: React.ReactNode
  leftIcon: React.ReactNode
  onClickActivate: React.UIEventHandler
}

export const Button : React.FC<IButtonProps> = (props) => {
  const { children, leftIcon, onClickActivate } = props;
  return <button onClick={onClickActivate}>{leftIcon}{children}</button>
}
