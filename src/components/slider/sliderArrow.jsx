import "../comps.css";

function SliderArrow({ img, id, onClick }) {
  let sliderArrowClassName = `sliderArrow${id}`;
  return (
    <div
      className={sliderArrowClassName}
      onClick={() => {
        onClick();
      }}
    >
      <img src={img} />
    </div>
  );
}

export default SliderArrow;
