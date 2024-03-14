import "./Contains.css";
import ContainItem from "./containItem";
import { data } from "../../json/contain.json";
function Contains() {
  return (
    <div className="contains section">
      <div className="containsText">
        <span className="ContainsTitle">Nasza </span>
        <span className="ContainsTitle2">oferta </span>
        <span className="ContainsTitle">obejmuje</span>
      </div>
      <div className="containsContent">
        {data.map((item, i) => {
          return (
            <ContainItem
              id={i + 1}
              key={"contain" + i}
              title={item.title}
              content={item.content}
            />
          );
        })}
      </div>
      <hr className="line" />
    </div>
  );
}

export default Contains;
