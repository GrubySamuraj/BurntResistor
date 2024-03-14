import "./comps.css";
import Welcome from "./welcome/welcome";
import News from "./news/news";
import Who from "./who/Who";
import Contains from "./Contains/Contains";
import Rating from "./Rating/Rating";
import Contact from "./Contact/Contact";
import Socials from "./Socials/Socials";

function Main() {
  return (
    <div className="container">
      <div className="Main section">
        <Welcome />
      </div>
      <div className="mainContainer">
        <News />
        <Who />
        <Contains />
        <Rating />
        <Contact />
        <Socials />
      </div>
    </div>
  );
}

export default Main;
