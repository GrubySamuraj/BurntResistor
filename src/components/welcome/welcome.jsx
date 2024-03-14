import "../comps.css";
import Button from "../tools/button";
function Welcome() {
  return (
    <div className="welcome">
      <div className="texts">
        <div className="mainText">
          <span className="title">Witaj w BurntResistor</span>
        </div>
        <div className="text">
          Twoim partnerem w kompleksowej opiece informatycznej
        </div>
        <Button title={"Zobacz naszą pełną ofertę"} />
      </div>
      <div>
        <img
          src="src/assets/logo.png"
          width="600vh"
          height="300vh"
          className="logo"
        />
      </div>
    </div>
  );
}

export default Welcome;
