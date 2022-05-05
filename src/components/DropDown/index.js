const DropDown = ({ header,colorClass }) => {
    return (
      <div className="dropdown m-2 w-50">
        <button
          className={`btn w-100  dropdown-toggle text-white f20 ${colorClass}`}
          type="button"
          id={`dropdownMenuButton${header}`}
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {header}
        </button>
        <ul className="dropdown-menu w-100" aria-labelledby={`dropdownMenuButton${header}`}>
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    );
  };

  export default DropDown