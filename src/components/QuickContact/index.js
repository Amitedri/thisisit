import "./QuickContact.css";

const QuickContact = () => {
  return (
    <div className="col-auto d-flex flex-column contactColumn mt-3">
      <div className="contactItem d-flex flex-column align-items-center">
        <img src="./assets/icons/phone.svg" height="50" width="50" className="p-2 mb-3" />
        <img src="./assets/icons/whatsapp.svg" height="50" width="50" className="p-2 mb-3" />
        <img src="./assets/icons/maildotru.svg" height="50" width="50" className="p-2 mb-3" />
      </div>
    </div>
  );
};

export default QuickContact;
