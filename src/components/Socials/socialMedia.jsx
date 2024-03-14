import "./socials.css";
function SocialMedia({ icon, link }) {
  return (
    <div className="socialMedia">
      <a href={link}>
        <img src={"src/assets/" + icon.toString()} width={50} height={50} />
      </a>
    </div>
  );
}

export default SocialMedia;
