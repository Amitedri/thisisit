import {setModalText} from "../Slice"

const onFilterChange = ({ event, setTypeFilter }) => {
  setTypeFilter(event.target.value);
};
const scrollIntoView = (id) => {
  let elem = document.getElementById(id);
  console.log(elem)
  elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
  return;
};

const setModalTextFunc = (value,dispatch)=>{
  dispatch(setModalText(value))
}
export { onFilterChange ,scrollIntoView,setModalTextFunc};
