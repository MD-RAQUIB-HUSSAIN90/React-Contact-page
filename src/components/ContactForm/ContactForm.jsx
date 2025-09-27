import styles from "./ContactForm.module.css";
import Button from "../Buttons/Button";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { BsEmojiAngryFill } from "react-icons/bs";
import { useState } from "react";

function ContactForm() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [text,setText]=useState("");

 
  const onSubmit = (event) => {
    event.preventDefault();
   setName( event.target[0].value)
    setEmail( event.target[1].value)
    setText(event.target[2].value)
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />

          <Button text="VIA CALL" icon={<MdCall fontSize="24px" />} />
        </div>
        <Button
          isOutLine={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" color="black" />}
        />

        <form action="#" onSubmit={onSubmit}>
          <div className={styles.form_container}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className={styles.form_container}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className={styles.form_container}>
            <label htmlFor="text">TEXT</label>
            <textarea name="text" id="text" rows={6} />
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button text="SUBMIT" />
          </div>

          <div>
            {name + "" + email + "" + text}
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img
          src="/public/images/contact.svg"
          alt="contact image"
          style={{ height: "450px" }}
        />
      </div>
    </section>
  );
}

export default ContactForm;
