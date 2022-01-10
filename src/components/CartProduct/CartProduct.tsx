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
    <div className="flex w-[100%] items-center justify-between m-5 shadow-lg">
      <div className="flex flex-col w-full p-2 m-2">
        <h3 className="font-bold text-lg">{product.title}</h3>
        <div className="flex text-md text-gray-600 font-bold font-mono justify-between items-center p-2" >
          <p>$ {product.price}</p>
          <p>Total: ${(product.price * product.amount).toFixed(2)}</p>
        </div>
        <div className="flex items-center p-2 justify-between">
          <button className="bg-red-600 p-2 w-[15%] text-white" onClick={() => removeFromCart(product.id)}>-</button>
          <span>{product.amount}</span>

          <button className="bg-blue-300 p-2 w-[15%] text-white" onClick={()=>handleAddToCart(product)}>+</button>
        </div>
      </div>
      <img src={product.image} alt="okay" className="h-[150px] object-contain m-2" />
    </div>
  );
};

export default CartProduct;
