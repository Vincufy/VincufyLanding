import { useState, useEffect } from "react";
import styles from "./MailChimpForm.module.css";

const MailchimpForm = ({ title }) => {
  const [submitted, setSubmitted] = useState(false);
  const mailchimpUserId = import.meta.env.VITE__MAILCHIMP_USER_ID;
  const mailchimpListId = import.meta.env.VITE__MAILCHIMP_LIST_ID;
  const audienceId = import.meta.env.VITE__MAILCHIMP_AUDIENCE_ID;

  useEffect(() => {
    const script = document.createElement("script");
    script.id = "mcjs";
    script.src =
      "https://chimpstatic.com/mcjs-connected/js/users/415006e2227c4565d8cc8a30b/09b9e0231a6c55bedd04994ae.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = document.getElementById("mce-EMAIL").value;

    const formData = new FormData();
    formData.append("EMAIL", email);

    try {
      const response = await fetch(
        `https://${mailchimpListId}.usX.list-manage.com/subscribe/post?u=${mailchimpUserId}&amp;id=${audienceId}`,
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );
      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("No se pudo suscribir.");
      }
    } catch (error) {
      alert("Hubo un problema al intentar suscribirse.");
    }
  };

  return (
    <div className={styles.container}>
      <p>{title}</p>
      {submitted ? (
        <div id="success-message" className={styles.thanksDiv}>
          <img src="https://i.imgur.com/4pS8zA4.gif" alt="Success" />
          <p>¡Gracias por suscribirte! 🎉</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          method="POST"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          noValidate
        >
          <div className={styles.inputWrapper}>
            <input
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              placeholder="Tu correo electrónico"
              required
            />
            <button type="submit">Recibir mail</button>{" "}
          </div>
        </form>
      )}
    </div>
  );
};

export default MailchimpForm;
