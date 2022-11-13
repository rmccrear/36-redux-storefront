import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Chip, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";

import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../store";

const findItemFromCatalog = catalog => itemId => {
  return catalog.find(item => item.id === itemId);
}

const appendCartInfo = cart => item => {
  return { ...item, ...cart[item.id] };
}

export const buildCart = (cart, catalog) => {
  const itemIds = Object.keys(cart).map( id => parseInt(id) );
  const inCartList = itemIds.map(findItemFromCatalog(catalog))
    .map(appendCartInfo(cart));
  return inCartList;
}

export function CartInner(props) {
  const { cart, catalog } = props;
  const cartObj = buildCart(cart, catalog);
  const cartKeys = Object.keys(cartObj);
  const itemsJsx = cartKeys.map(itemId => {
    const item = cartObj[itemId];
    return (
      <ListItem key={ itemId }>
        <ListItemText primary={ item.title } />
        <IconButton data-testid="remove-item-button" onClick={() => props.removeFromCart(item.id)}>
            <RemoveIcon />
        </IconButton> 
        <Chip label={ item.quantity } variant="outlined" />
        <IconButton data-testid="add-item-button" onClick={() => props.addToCart(item.id)}>
            <AddIcon />
        </IconButton>
      </ListItem>
    );
  });
  return (
    <div>
        <Typography gutterBottom variant="h5" component="div">
          Cart 
        </Typography>
      <List>
        { itemsJsx }
      </List>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    catalog: state.catalog
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart: (id) => dispatch(addToCart(id)),
//     removeFromCart: (id) => dispatch(removeFromCart(id)),
//   };
// };

const mapDispatchToProps = {
    addToCart,
    removeFromCart,
};

const Cart = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartInner);

export default Cart;