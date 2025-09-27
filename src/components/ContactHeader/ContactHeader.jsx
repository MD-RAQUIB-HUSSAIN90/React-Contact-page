import styles from "./ContactHeader.module.css";

function ContactHeader() {
  return (
    <div className={`${styles.contact_section}`}>
      <h1>CONTACTS US</h1>
      <p>
        LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU! WHERE
        YOU HAVE A QUESTION, OR JUST WANT TO CHAT, YOU CAN REACH OUT TO US
        THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMIAL OR SOCIAL
        MEDIA.
      </p>
    </div>
  );
}

export default ContactHeader;
