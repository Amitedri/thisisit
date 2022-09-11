import './Contracts.css';

const AddContract = () => {
  return (
    <div className="col-12 d-flex flex-column align-items-center justify-content-center align-content-center">
      <h1 className="">הוספת הסכם חדש</h1>
      <div className="col-12 d-flex flex-column justify-content-center align-items-center justify-content-center m-2">
        <div class="form-group col-6">
          <label for="contracth1">כותרת ראשית לעמוד</label>
          <input type="text" class="form-control" id="contracth1" placeholder="כותרת ראשית לעמוד" />
        </div>
        <div class="input-group-prepend  col-6 m-2 d-flex flex-column justify-content-center">
          <label class="input-group-text" for="category">
            כותרת SEO
          </label>
          <textarea className="form-control" type="text" />
        </div>
        <div class="input-group-prepend  col-6 m-2 d-flex flex-column justify-content-center">
          <label class="input-group-text" for="category">
            תיאור SEO
          </label>
          <textarea className="form-control" type="text" />
        </div>

      </div>

      <div className="col-6 d-flex flex-row justify-content-center align-items-center m-2">
        <div class="input-group mb-3 rounded d-flex flex-row justify-content-center align-items-center">
          <div class="input-group-prepend  col-12 d-flex flex-row justify-content-start">
            <label class="input-group-text " for="category">
              קטגוריה
            </label>
            <select class="form-select  rounded-end" id="category">
              <option selected value="0">
                בחר
              </option>
              <option value="1">עבודה</option>
              <option value="2">מקרקעין</option>
              <option value="3">חברות</option>
              <option value="4">משפחה</option>
              <option value="5">כללי</option>
            </select>
          </div>
        </div>
      </div>
      <div className="col-6 d-flex flex-row flex-wrap justify-content-center">
        <div class="form-group m-2 d-flex flex-column bg-white col-5 rounded shadow-sm p-2 justify-content-center">
          <label for="contractImg">תמונה ראשית</label>
          <input type="file" class="form-control-file" id="contractImg" />
        </div>
        <div class="form-group m-2 d-flex flex-column  bg-white col-5 rounded shadow-sm p-2 justify-content-center">
          <label for="visibleContract">הסכם - חלק גלוי</label>
          <input type="file" class="form-control-file" id="visibleContract" />
        </div>
        <div class="form-group m-2 d-flex flex-column  bg-white col-5 rounded shadow-sm p-2 justify-content-center">
          <label for="hiddenContract">הסכם בסיסי מלא</label>
          <input type="file" class="form-control-file" id="hiddenContract" />
        </div>
        <div class="form-group m-2 d-flex flex-column  bg-white col-5 rounded shadow-sm p-2 justify-content-center">
          <label for="fullContract">הסכם להורדה</label>
          <input type="file" class="form-control-file" id="fullContract" />
        </div>
        <div class="form-group m-2 d-flex flex-column  bg-white col-5 rounded shadow-sm p-2 justify-content-center">
          <label for="fullContract">הסכם מקיף</label>
          <input type="file" class="form-control-file" id="fullContract" />
        </div>
      </div>
      <div className="col-6 d-flex flex-column justify-content-start">
        {/*  */}
        <div className="col-12 d-flex flex-column justify-content-center border align-items-center bg-light p-2 rounded shadow-sm m-2">
          <h1> בסיסי</h1>
          <div class="form-check col-6 m-2">
            <input class="form-check-input" type="checkbox" value="" id="hasMekifColumn" />
            <label class="form-check-label" for="hasMekifColumn">
              הצג עמודת בסיסי
            </label>
          </div>
          <div class="form-check col-6 m-2">
            <input class="form-check-input" type="checkbox" value="" id="numOfPagesMekif" />
            <label class="form-check-label" for="numOfPagesMekif">
              קובץ WORD
            </label>
          </div>
          <div class="form-check col-6 m-2">
            <input class="form-check-input" type="checkbox" value="" id="numOfPagesMekif" />
            <label class="form-check-label" for="numOfPagesMekif">
              התאמה אישית
            </label>
          </div>
          <div class="input-group-prepend  col-6 m-2 d-flex flex-row justify-content-start">
            <label class="input-group-text col-5" for="category">
              זמן הכנה
            </label>
            <select class="form-select  rounded-end" id="category">
              <option selected value="0">
                בחר
              </option>
              <option value="1">מיידי</option>
              <option value="2">2 ימי עסקים</option>
              <option value="3">5 ימי עסקים</option>
              <option value="4">7 ימי עסקים</option>
            </select>
          </div>
          <div class="input-group-prepend  col-6 m-2 d-flex flex-row justify-content-start">
            <label class="input-group-text col-5" for="category">
              מספר עמודים
            </label>
            <input className="form-control" type="text" />
          </div>
          <div class="input-group-prepend  col-6 m-2 d-flex flex-row justify-content-start">
            <label class="input-group-text col-5" for="category">
              מספר תיקונים
            </label>
            <input className="form-control" type="text" />
          </div>
        </div>
        {/* mekif package container */}
        <div className="col-12 d-flex flex-column justify-content-center border align-items-center bg-light p-2 rounded shadow-sm m-2">
          <h1> מקיף</h1>
          <div class="form-check col-6 m-2">
            <input class="form-check-input" type="checkbox" value="" id="hasMekifColumn" />
            <label class="form-check-label" for="hasMekifColumn">
              הצג עמודת מקיף
            </label>
          </div>
          <div class="form-check col-6 m-2">
            <input class="form-check-input" type="checkbox" value="" id="numOfPagesMekif" />
            <label class="form-check-label" for="numOfPagesMekif">
              קובץ WORD
            </label>
          </div>
          <div class="form-check col-6 m-2">
            <input class="form-check-input" type="checkbox" value="" id="numOfPagesMekif" />
            <label class="form-check-label" for="numOfPagesMekif">
              התאמה אישית
            </label>
          </div>
          <div class="input-group-prepend  col-6 m-2 d-flex flex-row justify-content-start">
            <label class="input-group-text col-5" for="category">
              זמן הכנה
            </label>
            <select class="form-select  rounded-end" id="category">
              <option selected value="0">
                בחר
              </option>
              <option value="1">מיידי</option>
              <option value="2">2 ימי עסקים</option>
              <option value="3">5 ימי עסקים</option>
              <option value="4">7 ימי עסקים</option>
            </select>
          </div>
          <div class="input-group-prepend  col-6 m-2 d-flex flex-row justify-content-start">
            <label class="input-group-text col-5" for="category">
              מספר עמודים
            </label>
            <input className="form-control" type="text" />
          </div>
          <div class="input-group-prepend  col-6 m-2 d-flex flex-row justify-content-start">
            <label class="input-group-text col-5" for="category">
              מספר תיקונים
            </label>
            <input className="form-control" type="text" />
          </div>
        </div>
        <div className="col-12 d-flex flex-column justify-content-center border align-items-center bg-light p-2 rounded shadow-sm m-2">
          <h1> התאמה אישית</h1>
          <div class="form-check col-6 m-2">
            <input class="form-check-input" type="checkbox" value="" id="hasMekifColumn" />
            <label class="form-check-label" for="hasMekifColumn">
              הצג עמודת התאמה אישית
            </label>
          </div>
          <div class="form-check col-6 m-2">
            <input class="form-check-input" type="checkbox" value="" id="numOfPagesMekif" />
            <label class="form-check-label" for="numOfPagesMekif">
              קובץ WORD
            </label>
          </div>
          <div class="form-check col-6 m-2">
            <input class="form-check-input" type="checkbox" value="" id="numOfPagesMekif" />
            <label class="form-check-label" for="numOfPagesMekif">
              התאמה אישית
            </label>
          </div>
          <div class="input-group-prepend  col-6 m-2 d-flex flex-row justify-content-start">
            <label class="input-group-text col-5" for="category">
              זמן הכנה
            </label>
            <select class="form-select  rounded-end" id="category">
              <option selected value="0">
                בחר
              </option>
              <option value="1">מיידי</option>
              <option value="2">2 ימי עסקים</option>
              <option value="3">5 ימי עסקים</option>
              <option value="4">7 ימי עסקים</option>
            </select>
          </div>
          <div class="input-group-prepend  col-6 m-2 d-flex flex-row justify-content-start">
            <label class="input-group-text col-5" for="category">
              מספר עמודים
            </label>
            <input className="form-control" type="text" />
          </div>
          <div class="input-group-prepend  col-6 m-2 d-flex flex-row justify-content-start">
            <label class="input-group-text col-5" for="category">
              מספר תיקונים
            </label>
            <input className="form-control" type="text" />
          </div>
        </div>
        {/*  */}

        <div className="col-12 d-flex flex-column justify-content-center border align-items-center bg-light p-2 rounded shadow-sm m-2">
          <h1> פגישת ייעוץ</h1>
          <div class="form-check col-6 m-2">
            <input class="form-check-input" type="checkbox" value="" id="hasMekifColumn" />
            <label class="form-check-label" for="hasMekifColumn">
              הצג עמודת פגישת ייעוץ
            </label>
          </div>
          <div class="form-check col-6 m-2">
            <input class="form-check-input" type="checkbox" value="" id="numOfPagesMekif" />
            <label class="form-check-label" for="numOfPagesMekif">
              קובץ WORD
            </label>
          </div>
          <div class="form-check col-6 m-2">
            <input class="form-check-input" type="checkbox" value="" id="numOfPagesMekif" />
            <label class="form-check-label" for="numOfPagesMekif">
              התאמה אישית
            </label>
          </div>
          <div class="input-group-prepend  col-6 m-2 d-flex flex-row justify-content-start">
            <label class="input-group-text col-5" for="category">
              זמן הכנה
            </label>
            <select class="form-select  rounded-end" id="category">
              <option selected value="0">
                בחר
              </option>
              <option value="1">מיידי</option>
              <option value="2">2 ימי עסקים</option>
              <option value="3">5 ימי עסקים</option>
              <option value="4">7 ימי עסקים</option>
            </select>
          </div>
          <div class="input-group-prepend  col-6 m-2 d-flex flex-row justify-content-start">
            <label class="input-group-text col-5" for="category">
              מספר עמודים
            </label>
            <input className="form-control" type="text" />
          </div>
          <div class="input-group-prepend  col-6 m-2 d-flex flex-row justify-content-start">
            <label class="input-group-text col-5" for="category">
              מספר תיקונים
            </label>
            <input className="form-control" type="text" />
          </div>
        </div>
      </div>
      <div className="d-grid col-3 m-2">
        <div className="btn btn-primary">צור הסכם</div>
      </div>
    </div>
  );
};

export default AddContract;
