const FullList = ({dataToRender,componentHeader,Children}) => {
    return (
      <div className="col-12 d-flex flex-column align-items-center cream mb-2 pb-3 rounded mt-5">
        <Children componentHeader={componentHeader} dataToRender={dataToRender} />
        <a href="#" class="btn yellow w-25 text-white f20 w3">
            פתח עוד
          </a>
      </div>
    );
  };

  export default FullList