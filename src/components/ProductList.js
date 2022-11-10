import Product from "./Product";

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
      { displayProducts(products) }
    </div>
  );
}

export default ProductList;