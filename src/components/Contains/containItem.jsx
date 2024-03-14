import "./contains.css";

function ContainItem({ id, title, content }) {
  return (
    <div className="containItem">
      <div className="containItemTitle">
        <span className="number">{id}. </span>
        <span className="ContainTitle">{title}</span>
      </div>
      <span className="content">{content}</span>
    </div>
  );
}

export default ContainItem;
