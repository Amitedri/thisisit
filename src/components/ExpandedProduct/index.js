import { allProdcts, allServices } from "../../sampleData";
const Product = ({ title, description }) => {
  return (
    <div className="card align-items-center p-0 col-3 m-2">
      <img src="./assets/img/exp.png" className="card-img-top" />
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">sCard title</h5>
        <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/contractpage" className="btn yellow text-white m-1 w-75">
          פתח הסכם לדוגמא
        </a>
        <a href="/checkout" className="btn yellowLight text-white m-1 w-75">
          רכוש 69.90₪
        </a>
      </div>
    </div>
  );
};
const ExpandedProducs = ({ dataToRender }) => {
  return dataToRender.map((el) => {
    return <Product />;
  });
};

export default ExpandedProducs;
