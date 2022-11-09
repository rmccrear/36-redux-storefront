import Product from "./Product";

const ProductList = (props) => {
  const { products, addToCart, viewDetails } = props;
  const displayProducts = (products) => {
    return products.map(product => {
      const productProps = { product, addToCart, viewDetails };
      return (<Product {...productProps} />);
    });
  };
  return (
    <div>
      { displayProducts(products) }
    </div>
  );
}

export default ProductList;