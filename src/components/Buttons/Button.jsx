
import style from "./Button.module.css";
function Button({isOutLine, icon, text,...rest}) {
  return (
    <button {...rest}
     className={isOutLine ? style.outline_btn : style.primery_btn}>
      {icon}
      {text}
    </button>
  );
}

export default Button;
