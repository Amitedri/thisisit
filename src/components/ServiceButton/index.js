import { useEffect, useState } from "react";

const ServiceButton = ({ withText }) => {
  const [show,setShow] = useState(false)

  useEffect(()=>{
  let width = document.body.clientWidth;
console.log(width)
    if(width <= 650){
      setShow(false)
      return
    }
    if(withText){
      setShow(true)
      return
    }
    

  },[withText])

  
  return (
    <div className="d-flex flex-row justify-content-evenly align-items-center">
      <a href="tel:0508081119">
        <img style={{height:"20x",width:"20px"}} src="../assets/icons/phoneWhite.svg" height="20" width="20" className="d-md-block d-lg-block d-xl-block d-xxl-block d-block iconSize" />
      </a>
      {show ? (
        <a href="tel:0508081119" className="text-dark">צור קשר עכשיו</a>
      ) : (
        <a href="https://api.whatsapp.com/send?phone=972508081119">
          <img style={{height:"20x",width:"20px"}} src="../assets/icons/whatsappWhite.svg" height="20" width="20" className="d-md-block d-lg-block d-xl-block d-xxl-block d-block iconSize" />
        </a>
      )}
      <a href="mailto:office@ceco.co.il">
        <img style={{height:"20x",width:"20px"}} src="../assets/icons/maildotruWhite.svg" height="20" width="20" className="d-md-block d-lg-block d-xl-block d-xxl-block d-block iconSize pointer" />
      </a>
    </div>
  );
};

export default ServiceButton;
