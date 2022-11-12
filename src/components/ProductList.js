import { Grid } from "@mui/material";
import Product from "./Product";

import "./ProductList.scss";

const ProductList = (props) => {
  const { products, addToCart, viewDetails, currentCategory } = props;
  const displayProducts = (products) => {
    return products
      .filter(product => {
        if (currentCategory !== 'ALL') {
          return product.category === currentCategory;
        } else {
          return true;
        }
      })
      .map(product => {
        const productProps = { key: product.id, product, addToCart, viewDetails };
        return (<Product {...productProps} />);
      });
  };
  return (
    <div>
      <h2>{ props.currentCategory }</h2>
      <Grid container spacing={2} className="product-list">
        { displayProducts(products) }
      </Grid>
    </div>
  );
}

export default ProductList;