import { FC } from "react";
import { AppBar, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

type HeaderProps = {
  openDrawer: () => any;
};

const Header: FC<HeaderProps> = ({ openDrawer }) => {
  return (
    <div className="flex w-[100%] justify-end">
      <AppBar position="sticky" className="bg-black">
        <IconButton size="large" color="inherit" onClick={openDrawer}>
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </AppBar>
    </div>
  );
};

export default Header;
