import { FC } from "react";
import { CartItemType } from "../../types/CartItemType";
import CartProduct from "../CartProduct/CartProduct";

type CartPropTypes = {
  products: CartItemType[];
  handleAddToCart: (product: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: FC<CartPropTypes> = ({
  products,
  handleAddToCart,
  removeFromCart,
}) => {
  return (
    <div className="w-[500px] bg-gray-100 flex flex-col  items-center">
      <h2 className="text-xl font-bold text-purple-500">Your cart</h2>
      {products.length === 0 ? <p>NO items</p> : null}
      {products?.map((product) => (
        <CartProduct
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
};

export default Cart;
