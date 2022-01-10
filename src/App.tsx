import { FC, useState } from "react";
import { useQuery } from "react-query";
import { CartItemType } from "./types/CartItemType";
import { LinearProgress, Grid, Drawer, IconButton, Badge } from "@mui/material";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const fetchProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [products, setProducts] = useState([] as CartItemType[]);
  const { isLoading, data } = useQuery<CartItemType[]>(
    "products",
    fetchProducts
  );

  // add products to cart
  const handleAddToCart = (product: CartItemType) => {
    console.log(product);
  };

  const removeFromCart = () => {};

  const getCartTotal = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount, 0);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  if (isLoading) return <LinearProgress />;
  return (
    <div className="flex flex-col m-[40px] justify-center items-center">
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Cart
          products={products}
          handleAddToCart={handleAddToCart}
          removeFromCart={removeFromCart}
        />
      </Drawer>
      <IconButton size="large" color="inherit" onClick={openDrawer}>
        <Badge badgeContent={getCartTotal(products)} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Grid container spacing={4}>
        {data?.map((product) => (
          <Grid item key={product.id} xs={12} sm={4}>
            <Product
              product={product}
              handleAddToCart={() => handleAddToCart(product)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default App;
