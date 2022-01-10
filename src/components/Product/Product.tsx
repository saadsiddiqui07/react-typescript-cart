import { FC } from "react";
import { CartItemType } from "../../types/CartItemType";
import { Button } from "@mui/material";

type ProductProps = {
  product: CartItemType;
  handleAddToCart: (product: CartItemType) => void;
};

const truncateDescription = (str: string, num: number): any => {
  return str?.length > num ? str?.substr(0, num - 1) + "..." : str;
};

const Product: FC<ProductProps> = ({ product, handleAddToCart }) => {
  return (
    <div className="flex flex-col items-center p-2 m-4 shadow-2xl rounded-lg m-4">
      <img
        src={product.image}
        alt="okay"
        className="h-[150px] w-[100%] object-contain"
      />
      <div>
        <h3>{product.title}</h3>
        <p>{truncateDescription(product.description, 50)}</p>
        <h3 className="font-bold text-md text-gray-800 m-1 p-1">
          $ {product.price}
        </h3>
      </div>
      <Button variant="contained" onClick={() => handleAddToCart(product)}>
        Add To Cart
      </Button>
    </div>
  );
};

export default Product;
