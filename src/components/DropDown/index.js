import { useEffect } from 'react';



const DropDown = ({ header, colorClass, values,onChange }) => {
  const mappedValues = values.map((el) => {
    return <option>{el.title}</option>;
  });

  return (
    <div className="dropdown m-2 w-50 dropItem shadow-sm">
      <select onInput={onChange} className={`form-check btn w-100 text-white  f20 ${colorClass}`}>{mappedValues}</select>
    </div>
  );
};

export default DropDown;
