import { setModalText, addProduct,setShowCart } from '../Slice';

const onFilterChange = ({ event, setTypeFilter }) => {
  setTypeFilter(event.target.value);
};
const scrollIntoView = (id) => {
  let elem = document.getElementById(id);
  console.log(elem);
  elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
  return;
};

const setModalTextFunc = ({ value, dispatch }) => {
  dispatch(setModalText(value));
};
const addItem = ({ value, dispatch }) => {
  dispatch(setShowCart(true));
  dispatch(addProduct(value));
};
export { onFilterChange, scrollIntoView, setModalTextFunc,addItem };
