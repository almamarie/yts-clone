import styles from "./Button.module.css";

const Button: React.FC<{ text: string; type: "button" | "submit" }> = (
  props
) => {
  return (
    <button className={styles.button} type={props.type}>
      {props.text}
    </button>
  );
};

export default Button;
