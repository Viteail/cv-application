import classes from "./button.module.css";

interface IButtonProps {
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  variant?: "primary" | "delete" | "cancel" | "submit";
  type?: "button" | "submit" | "reset";
  valid?: boolean;
  onClick?: React.UIEventHandler;
}

const VariantMap = {
  primary: classes.primary,
  delete: classes.deleteBtn,
  cancel: classes.cancelBtn,
  submit: classes.submitBtn,
};

const createClasses = (
  className: string,
  classes: Partial<Record<string, boolean>>,
): string => {
  return Object.keys(classes).reduce((acc, curr) => {
    if (classes[curr]) {
      return `${acc} ${curr}`;
    }

    return acc;
  }, className);
};

export const Button: React.FC<IButtonProps> = (props) => {
  const {
    children,
    leftIcon,
    variant = "primary",
    type = "button",
    valid,
    onClick,
  } = props;

  const classNames = `${VariantMap[variant]}`;

  return (
    <div className={classes.buttonWrapper}>
      <button
        type={type}
        className={createClasses(classNames, { [classes.valid]: valid })}
        onClick={onClick}
      >
        {leftIcon}
        {children}
      </button>
    </div>
  );
};
