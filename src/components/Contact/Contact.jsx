import "./contact.css";
import ContactButton from "./contactButton";

function Contact() {
  const emailButtonHandler = () => {
    console.log("elo");
  };
  const phoneButtonHandler = () => {
    console.log("elo");
  };

  return (
    <div className="contactContainer section">
      <hr className="line" />
      <div className="contactContainer2">
        <div className="contactTitleContainer">
          <span className="contactTitle">Kontakt</span>
        </div>
        <div className="contactTextContainer">
          <span className="contactText">
            Skontaktuj się z nami, a nasz zespół odpowie w przeciągu doby (365
            dni)
          </span>
        </div>
        <div className="emailContainer">
          <ContactButton title={"Napisz do nas"} onClick={emailButtonHandler} />
          <span className="emailText">kontakt@burntresistor.pl</span>
        </div>
        <div className="phoneContainer">
          <ContactButton title={"Zadzwoń"} onClick={phoneButtonHandler} />
          <span className="phoneText"> +48 530-818-054 / +48 725-597-272 </span>
        </div>
      </div>
      <hr className="line" />
    </div>
  );
}

export default Contact;
