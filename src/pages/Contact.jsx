function Contact() {
  return (
    <section className="contact-page">
      <header className="contact-header">
        <p className="eyebrow">GET IN TOUCH</p>

        <h1>Let's connect.</h1>

        <p className="contact-intro">
I'm looking for opportunities to apply what I'm learning, contribute to a team, and grow my skills through real-world experience.
        </p>
      </header>

      <div className="contact-content">
        <div className="contact-main">
          <h2>Have an opportunity or just want to say hello?</h2>

          <p>
            Feel free to reach out by email or connect with me through
            LinkedIn. I'll be happy to hear from you.
          </p>

          <a
            className="contact-email"
            href="mailto:your-email@example.com"
          >
             jayswalmanthan19@gmail.com
          </a>
        </div>

        <div className="contact-links">
          <a
            href="https://github.com/Manthan420"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <span className="contact-link-left">
              <span>GitHub</span>
            </span>

            <span className="contact-arrow" aria-hidden="true">
              ↗
            </span>
          </a>

          <a
            href="mailto:your-email@example.com"
            className="contact-link"
          >
            <span className="contact-link-left">
              <span>Gmail</span>
            </span>

            <span className="contact-arrow" aria-hidden="true">
              ↗
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/manthan-jayswal09"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <span className="contact-link-left">
              <span>LinkedIn</span>
            </span>

            <span className="contact-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;