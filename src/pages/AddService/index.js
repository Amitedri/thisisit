import './Services.css';

const AddServices = () => {
  return (
    <div className="col-12 d-flex flex-column align-items-center justify-content-center align-content-center">
      <h1 className="">הוספת שירות חדש</h1>
      <div className="col-12 d-flex flex-column justify-content-center align-items-center justify-content-center m-2">
        <div class="form-group col-6">
          <label for="contracth1">כותרת ראשית לשירות</label>
          <input type="text" class="form-control" id="contracth1" placeholder="כותרת ראשית לשירות" />
        </div>
        <div class="form-group m-2 d-flex flex-column bg-white col-6 rounded shadow-sm p-2 justify-content-center">
          <label for="contractImg">תמונה ראשית</label>
          <input type="file" class="form-control-file" id="contractImg" />
        </div>
        <div class="input-group-prepend  col-6 m-2 d-flex flex-column justify-content-center">
          <label class="input-group-text" for="category">
            כותרת SEO
          </label>
          <textarea className="form-control mt-1" type="text" />
        </div>
        <div class="input-group-prepend  col-6 m-2 d-flex flex-column justify-content-center">
          <label class="input-group-text" for="category">
            תיאור SEO
          </label>
          <textarea className="form-control mt-1" type="text" />
        </div>
      </div>
      <div class="input-group-prepend  col-6 m-2 d-flex flex-column justify-content-center align-items-center">
        <label class="input-group-text fs-3 col-12 align-self-center text-center" for="category">
          H1
        </label>
        <input className="form-control mt-1" type="text" placeholder="כותרת פסקה" />
        <textarea className="form-control mt-1" type="text" placeholder="תוכן פסקה" />
      </div>
      <div class="input-group-prepend  col-6 m-2 d-flex flex-column justify-content-center align-items-center">
        <label class="input-group-text fs-3 col-12 align-self-center text-center" for="category">
          H2
        </label>
        <input className="form-control mt-1" type="text" placeholder="כותרת פסקה" />
        <textarea className="form-control mt-1" type="text" placeholder="תוכן פסקה" />
      </div>
      <div class="input-group-prepend  col-6 m-2 d-flex flex-column justify-content-center align-items-center">
        <label class="input-group-text fs-3 col-12 align-self-center text-center" for="category">
          H3
        </label>
        <input className="form-control mt-1" type="text" placeholder="כותרת פסקה" />
        <textarea className="form-control mt-1" type="text" placeholder="תוכן פסקה" />
      </div>
      <div class="input-group-prepend  col-6 m-2 d-flex flex-column justify-content-center align-items-center">
        <label class="input-group-text fs-3 col-12 align-self-center text-center" for="category">
          H4
        </label>
        <input className="form-control mt-1" type="text" placeholder="כותרת פסקה" />
        <textarea className="form-control mt-1" type="text" placeholder="תוכן פסקה" />
      </div>
      <div class="input-group-prepend  col-6 m-2 d-flex flex-column justify-content-center align-items-center">
        <label class="input-group-text fs-3 col-12 align-self-center text-center" for="category">
          H5
        </label>
        <input className="form-control mt-1" type="text" placeholder="כותרת פסקה" />
        <textarea className="form-control mt-1" type="text" placeholder="תוכן פסקה" />
      </div>
      <div class="input-group-prepend  col-6 m-2 d-flex flex-column justify-content-center align-items-center">
        <label class="input-group-text fs-3 col-12 align-self-center text-center" for="category">
          H6
        </label>
        <input className="form-control mt-1" type="text" placeholder="כותרת פסקה" />
        <textarea className="form-control mt-1" type="text" placeholder="תוכן פסקה" />
      </div>

      <div className="d-grid col-3 m-2">
        <div className="btn btn-primary">צור שירות</div>
      </div>
    </div>
  );
};

export default AddServices;


