import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { profile, socialLinks } from "../data/portfolio";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href={`mailto:${profile.email}`} data-cursor="disable">
                {profile.email}
              </a>
            </p>
            <h4>Focus</h4>
            <p>{profile.role}</p>
            <h4>Location</h4>
            <p>{profile.location}</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            {socialLinks.map((link) => (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-social"
                key={link.label}
              >
                {link.label} <MdArrowOutward />
              </a>
            ))}
          </div>
          <div className="contact-box">
            <h2>
              Let us build cleaner <br /> account and campaign systems <span>together</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
