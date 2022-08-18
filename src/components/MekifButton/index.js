const MekifPurchase = ({ data, onItemClick }) => {
    return (
      <div
        onClick={() =>
          onItemClick({
            id: data.id,
            name: data.h1,
            pack: 'מקיף',
            price: data.priceMekif,
            numOfPages: data.numOfPagesMekif,
            numOfFixes: data.numOfFixesMekif,
            makingTime: data.makingTimeMekif,
          })
        }
      >
        רכוש כעת | {data.priceMekif} ₪
      </div>
    );
  };

  export default MekifPurchase