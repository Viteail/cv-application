import classes from "./button.module.css";

interface IButtonProps {
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  variant?: "primary" | "delete" | "cancel" | "submit";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const VariantMap = {
  primary: classes.primary,
  delete: classes.deleteBtn,
  cancel: classes.cancelBtn,
  submit: classes.submitBtn,
};

export const Button: React.FC<IButtonProps> = (props) => {
  const {
    children,
    leftIcon,
    variant = "primary",
    type = "button",
    onClick,
  } = props;

  return (
    <div className={classes.buttonWrapper}>
      <button type={type} className={VariantMap[variant]} onClick={onClick}>
        {leftIcon}
        {children}
      </button>
    </div>
  );
};
