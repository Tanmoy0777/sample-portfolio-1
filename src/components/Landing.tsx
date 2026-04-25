import { PropsWithChildren } from "react";
import { profile } from "../data/portfolio";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Available for analytics roles</h2>
            <h1>
              TANMOY
              <br />
              <span>ACHARJEE</span>
            </h1>
            <p>{profile.summary}</p>
            <div className="landing-stats">
              {profile.proof.map((item) => (
                <div className="landing-stat" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="landing-info">
            <h3>{profile.headline}</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Accounts</div>
              <div className="landing-h2-2">Campaigns</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Automation</div>
              <div className="landing-h2-info-1">Strategy</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
