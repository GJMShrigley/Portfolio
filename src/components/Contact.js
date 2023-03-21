export default function Contact() {
  return (
    <div className="contact-page">
      <h1 className="page-header">CONTACT</h1>
      <div className="container">
        <form
          className="form"
          method="POST"
          data-netlify="true"
          netlify 
          netlify-honeypot="bot-field"
          name="email-form"
        >
          <input type="hidden" name="form-name" value="email-form" />
          <label className="form-label" htmlFor="form-name">
            Name:
          </label>
          <input
            className="form-input"
            id="form-name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          ></input>
          <label className="form-label" htmlFor="form-email">
            Email Address:
          </label>
          <input
            className="form-input"
            id="form-email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          ></input>
          <label className="form-label" htmlFor="form-text">
            Message:
          </label>
          <textarea
            className="form-text"
            id="form-text"
            type="text"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="form-submit" id="form-submit" type="submit" value="SUBMIT">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
