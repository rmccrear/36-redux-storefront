import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { openCart } from '../store';
import { AppBar, Badge, Toolbar, Typography } from '@mui/material';
import './Header.scss'

const countItemsInCart = (cart) => {
  const itemList = Object.values(cart);
  return itemList.reduce((sum, item) => sum + item.quantity, 0)
}

const Header = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const handleOpenCart = () => {
    dispatch(openCart());
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          { props.shopName }
        </Typography>
          <Badge badgeContent={countItemsInCart(cart)} color="primary" onClick={handleOpenCart}>
            <ShoppingCartIcon/>
          </Badge>
      </Toolbar>
    </AppBar>
  );
}

export default Header;