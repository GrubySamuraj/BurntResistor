import "./news.css";
import MySlider from "../slider/silder2";
function News() {
  return (
    <div className="news section">
      <div className="news-container">
        <span className="title-news">Aktualności</span>
        <br />
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit
          eros, convallis sit amet ullamcorper a, mattis ut lectus. Nulla
          lobortis nisl sed dolor scelerisque volutpat nec sit amet purus. Sed
          eu diam enim. Donec varius odio.
        </span>
        <MySlider />
      </div>
    </div>
  );
}

export default News;
