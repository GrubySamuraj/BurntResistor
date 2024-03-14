import "./contact.css";

function ContactButton({ title, onClick }) {
  return (
    <button
      className="contactButton"
      onClick={() => {
        onClick();
      }}
    >
      {title}
    </button>
  );
}

export default ContactButton;
