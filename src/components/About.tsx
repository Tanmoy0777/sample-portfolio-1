import { profile } from "../data/portfolio";
import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          {profile.role} specialist focused on the point where CRM data,
          account ownership, and campaign execution meet. I build dashboards,
          scoring models, and automation layers that help teams see which
          accounts need attention, which campaigns deserve more support, and
          what should happen next.
        </p>
      </div>
    </div>
  );
};

export default About;
