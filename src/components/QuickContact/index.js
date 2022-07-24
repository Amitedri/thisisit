import './QuickContact.css';

const QuickContact = () => {
  return (
    <div className="col-auto d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex d-flex flex-column contactColumn mt-3">
      <div className="contactItem d-flex flex-column align-items-center">
        <img
          src="../assets/icons/phone.svg"
          height="50"
          width="50"
          className="p-2 mb-3 d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block d-block"
        />
        <img
          src="../assets/icons/whatsapp.svg"
          height="50"
          width="50"
          className="p-2 mb-3 d-block d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block d-block"
        />
        <img
          src="../assets/icons/maildotru.svg"
          height="50"
          width="50"
          className="p-2 mb-3 d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block d-block"
        />
      </div>
    </div>
  );
};

export default QuickContact;
