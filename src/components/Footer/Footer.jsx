import "./footer.css";
import githubLogo from "../../assets/github.png";
import linkedInLogo from "../../assets/linkedin.png";

function Footer() {
  return (
    <div className="footer">
      <div className="content">
        <div className="creator">
          <span className="footerText">Created by: Jakub Dragosz</span>
          <a
            href="https://www.linkedin.com/in/jakub-dragosz-988b92223"
            className="logo"
          >
            <img src={linkedInLogo} alt={"linkedin"} width={50} height={50} />
          </a>
          <a href="https://github.com/GrubySamuraj" className="logo">
            <img src={githubLogo} alt={"github"} width={50} height={50} />
          </a>
        </div>
        <div className="creator">
          <span className="footerText">Designed by: Jakub Zieliński</span>
          <a href="https://www.linkedin.com/in/jkzielinski" className="logo">
            <img src={linkedInLogo} alt={"linkedin"} width={50} height={50} />
          </a>
          <a href="https://github.com/jzielinski47" className="logo">
            <img src={githubLogo} alt={"github"} width={50} height={50} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
