import "./rating.css";
import { ratings } from "../../json/rating.json";
import Review from "./review";

function Rating() {
  return (
    <div className="RatingContainer section">
      <div className="RatingTitleContainer">
        <span className="RatingTitle1">Dlaczego </span>
        <span className="RatingTitle2">nas </span>
        <span className="RatingTitle1">wybrać</span>
      </div>
      <div className="Reviews">
        {ratings.map((item, i) => {
          return (
            <Review
              key={"Review" + i}
              user={item.user}
              content={item.content}
              id={item.id}
              stars={item.stars}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Rating;
