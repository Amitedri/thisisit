import { useEffect } from 'react';

import $ from 'jquery';

const LinksDrop = ({ header, colorClass, values, subdomain }) => {
  useEffect(() => {
    window.$('.linkedDrop').on('change', function () {
      var id = this.options[this.selectedIndex].dataset.conid;
      window.location.pathname = `${subdomain}/${id}`;
    });
    return () => {
      window.$('.linkedDrop').off('change', function () {});
    };
  }, []);

  const mappedValues = values.map((el) => {
    return (
      <option className="walla" data-conid={el.id}>
        {el.h1}
      </option>
    );
  });

  return (
    <div className="dropdown m-2 w-50 dropItem shadow-sm">
      <select className={`form-check btn w-100 text-white linkedDrop  f20 ${colorClass}`}>{mappedValues}</select>
    </div>
  );
};

export default LinksDrop;
