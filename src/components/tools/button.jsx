import "../comps.css";
function Button({ title, clicked }) {
  return (
    <button
      className="Button"
      onClick={() => {
        clicked();
      }}
    >
      {title}
    </button>
  );
}

export default Button;
