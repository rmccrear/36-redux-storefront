
const ProductDetails = (props) => {
  const { product } = props;
  const handleAddToCart = () => props.addToCart(product.id);
  const handleCloseDetails = () => props.closeDetails();
  return (<div>
    <div>
      <span onClick={ handleCloseDetails }>X</span>
      <h2>{ product.title }</h2>
      <h3>{ product.shortDescription }</h3>
    </div>
    <p>{ product.description }</p>
    <div>
      <span onClick={handleAddToCart}>Add to cart</span>
    </div>
  </div> );
}

export default ProductDetails;