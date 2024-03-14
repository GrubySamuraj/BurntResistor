import { useEffect, useState } from "react";
import "./rating.css";
import emptyStar from "../../assets/emptyStar.png";
import fullStar from "../../assets/fullStar.png";

function Review({ user, content, stars, id }) {
  const numOfStars = 5;
  const starsArray = new Array(numOfStars)
    .fill(0)
    .map((_, index) => (index < stars ? 1 : 0));
  return (
    <div className="reviewContainer">
      <div className="userContainer">
        <span className="userText">{user}</span>
      </div>
      <div className="contentContainer">
        <span className="contentText">{content}</span>
      </div>
      <div className="starContainer">
        {starsArray.map((star2, i) => {
          let stringKey = `star_${id.toString()}_${i.toString()}`;
          if (star2 === 0) {
            return <img src={emptyStar} key={stringKey} />;
          } else {
            return <img src={fullStar} key={stringKey} />;
          }
        })}
      </div>
    </div>
  );
}

export default Review;
