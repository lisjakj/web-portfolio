import styles from './ContactStyles.module.css';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

function Contact() {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_tg9z2pe',
        'template_s7ys2om',
        form.current,
        '-Cei3Znj0gWGTwppT'
      )
      .then(
        (result) => {
          console.log('Success:', result.text);
          alert('Message Sent Successfully!');
        },
        (error) => {
          console.log('Error:', error.text);
          alert('Failed to send message. Please try again.');
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input className="hoverBtn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
