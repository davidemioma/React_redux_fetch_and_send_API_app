import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, Fragment } from "react";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();

  const isCartActive = useSelector((state) => state.cartBtn.showCart);

  const cart = useSelector((state) => state.cart);

  const notificatiion = useSelector((state) => state.cartBtn.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  //Using use event to send data request with Redux.
  // useEffect(() => {
  //   const sendCartData = async () => {
  //     try {
  //       dispatch(
  //         cartBtnActions.showNotification({
  //           status: "pending",
  //           title: "Sending...",
  //           message: "Sending cart data!",
  //         })
  //       );

  //       const res = await fetch(
  //         "https://react-redux-api-26839-default-rtdb.firebaseio.com/cart.json",
  //         {
  //           method: "PUT",
  //           body: JSON.stringify(cart),
  //         }
  //       );

  //       if (!res.ok) {
  //         throw new Error("Something went wrong...");
  //       }

  //       dispatch(
  //         cartBtnActions.showNotification({
  //           status: "success",
  //           title: "Success!...",
  //           message: "Send cart data successfully!",
  //         })
  //       );
  //     } catch (err) {
  //       dispatch(
  //         cartBtnActions.showNotification({
  //           status: "error",
  //           title: "Error!...",
  //           message: "Sending cart data failed!",
  //         })
  //       );
  //     }
  //   };

  //   if (isInitial === true) {
  //     isInitial = false;
  //     return;
  //   }

  //   sendCartData();
  // }, [cart, dispatch]);

  return (
    <Fragment>
      {notificatiion && (
        <Notification
          status={notificatiion.status}
          title={notificatiion.title}
          message={notificatiion.message}
        />
      )}
      <Layout>
        {isCartActive && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
