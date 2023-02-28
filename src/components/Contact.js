export default function Contact() {
  return (
    <div className="contact-page">
      <h1 className="page-header">CONTACT</h1>
      <div className="contact">
        <form className="contact__form" method="POST" data-netlify="true" name="email-form">
          <label className="contact__label" htmlFor="contact__name">Name:</label>
          <input className="contact__input" id="contact__name" type="text" name="name" placeholder="Your Name"
                        required></input>
                    <label className="contact__label" htmlFor="contact__email">Email Address:</label>
                    <input className="contact__input" id="contact__email" type="email" name="email" placeholder="Your Email"
                        required></input>
                    <label className="contact__label" htmlFor="contact__text">Message:</label>
                    <textarea className="contact__text" id="contact__text" type="text" name="message"
                        placeholder="Your Message" required></textarea>
                    <button className="contact__submit" id="contact__submit" type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
