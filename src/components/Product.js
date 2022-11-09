
const Product = (props) => {
  const handleViewDetails = () => {
    props.viewDetails(props.product.id);
  }
  const handleAddToCart = () => {
    props.addToCart(props.product.id);
  }
  return (
    <div>
      <h3>{props.product.title}</h3>
      <p>
        { props.product.shortDescription }
      </p>
      <div>
        <span onClick={ handleAddToCart }>Add to cart</span>
        <span onClick={ handleViewDetails }>details...</span>
      </div>
    </div>
  );
};

export default Product;