import "./slider.css";
import Button from "../tools/button";

function SliderItem({ img, title, text, buttontitle, onClick }) {
  let src = `../../../src/assets/${img}.png`;
  return (
    <div className="sliderItem">
      <img src={src} width={700} height={500} className="sliderImg" />
      <span className="titleSlider">{title}</span>
      <span className="textSlider">{text}</span>
      <Button title={buttontitle} onClick={onClick} />
    </div>
  );
}

export default SliderItem;
