const Checkbox = ({ value, setValue, title }) => {
  return (
    <div class="form-check d-flex flex-row justify-content-center align-items-center" style={{direction:'rtl'}}>
      <input class="form-check-input m-1" type="checkbox" value="" id="flexCheckDefault"style={{direction:'rtl'}} onChange={()=>setValue((prev)=>!prev)} checked={value} />
      <label class="form-check-label m-1" for="flexCheckDefault" style={{direction:'rtl'}}>
        {title}
      </label>
    </div>
  );
};

export default Checkbox;
