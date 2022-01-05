import { cartBtnActions } from "./index-redux";
import { cartActions } from "./index-redux";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        "https://react-redux-api-26839-default-rtdb.firebaseio.com/cart.json"
      );

      if (!res.ok) throw new Error("Something went wrong...");

      const data = await res.json();

      return data;
    };

    try {
      const cartData = await fetchData();

      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (err) {
      dispatch(
        cartBtnActions.showNotification({
          status: "error",
          title: "Error!...",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      cartBtnActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const res = await fetch(
        "https://react-redux-api-26839-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Something went wrong...");
      }
    };

    try {
      await sendRequest();

      dispatch(
        cartBtnActions.showNotification({
          status: "success",
          title: "Success!...",
          message: "Send cart data successfully!",
        })
      );
    } catch (err) {
      dispatch(
        cartBtnActions.showNotification({
          status: "error",
          title: "Error!...",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
