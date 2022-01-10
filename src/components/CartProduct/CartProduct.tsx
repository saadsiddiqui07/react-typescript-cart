import { FC } from "react";
import { CartItemType } from "../../types/CartItemType";

type CartProductProps = {
  product: CartItemType;
  handleAddToCart: (product: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartProduct: FC<CartProductProps> = ({
  product,
  handleAddToCart,
  removeFromCart,
}) => {
  return (
    <div>
      <img src={product.image} alt="okay" className="h-[100px]" />
      <p>{product.title}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default CartProduct;
