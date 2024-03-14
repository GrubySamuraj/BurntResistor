import "./socials.css";
import { data } from "../../json/socials.json";
import SocialMedia from "./socialMedia";
function Socials() {
  return (
    <div className="socialsContainer section">
      <div className="socialMediaTextContainer">
        <span className="socialMediaText1">Nasze </span>
        <span className="socialMediaText2">sociale</span>
      </div>
      <div className="socialMediaIcons">
        {data.map((item, i) => {
          return <SocialMedia icon={item.icon} link={item.link} />;
        })}
      </div>
    </div>
  );
}

export default Socials;
