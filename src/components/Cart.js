import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      {cartItems.length > 0 && (
        <button
          className="m-2 p-2 text-orange-400 border border-orange-200 rounded-lg bg-slate-100"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      )}
      {cartItems.length === 0 && (
        <div>
          <h1 className="font-bold text-2l m-2 p-2">
            Looks like, your cart is empty
          </h1>
          <p className="pb-2">
            You can go to home page to view more restaurants
          </p>
        </div>
      )}
      <div className="w-6/12 m-auto border border-orange-300">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
