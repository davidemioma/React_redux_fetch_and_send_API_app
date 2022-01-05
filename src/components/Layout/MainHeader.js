import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { useDispatch } from "react-redux";
import { cartBtnActions } from "../../store/index-redux";

const MainHeader = (props) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(cartBtnActions.toggleCart());
  };

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={onClickHandler} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
