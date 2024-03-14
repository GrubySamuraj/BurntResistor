import "./who.css";
import img from "../../assets/placeHolder.png";
function Who() {
  return (
    <div className="whoContainer section">
      <div className="who">
        <div className="imgContainer">
          <img src={img} width={"340px"} height={"340px"} className="imgWho" />
        </div>
        <div className="textsWho">
          <span className="titleWho">Kim jesteśmy?</span>
          <span className="textWho">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            volutpat enim ut varius convallis. Quisque viverra neque metus, quis
            dignissim orci imperdiet ut. Aenean in efficitur augue. Sed in
            pretium eros. Curabitur at tortor placerat, varius elit et,
            ultricies risus. Suspendisse dapibus tempus orci. Proin eget
            hendrerit erat, ut vulputate orci. In sit amet elit vel lectus
            mattis elementum. Curabitur risus leo, luctus vel erat eget,
            tristique maximus justo. Duis vel consectetur justo. Phasellus
            consequat pretium semper. Pellentesque porta lectus nec ex pretium,
            eget venenatis nisl pellentesque.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Who;
