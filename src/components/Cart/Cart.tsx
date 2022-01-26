import { FC } from "react";
import { CartItemType } from "../../types/CartItemType";
import CartProduct from "../CartProduct/CartProduct";
import { Button } from "@mui/material";

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
  // calculate total amount of the cart
  const getTotalAmount = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <div className="w-[500px]  flex flex-col  items-center">
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
      <div className="flex px-4 items-center justify-between w-full">
        <Button variant="contained">Proceed to checkout</Button>
        <h2>Total: ${getTotalAmount(products)}</h2>
      </div>
    </div>
  );
};

export default Cart;
