import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import style from "./Button.module.css";
function Button(props) {
  return (
    <button className={props.isOutLine ? style.outline_btn : style.primery_btn}>
      {props.icon}
      {props.text}
    </button>
  );
}

export default Button;
