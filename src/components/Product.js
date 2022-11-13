import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";

const Product = (props) => {
  const handleViewDetails = () => {
    props.viewDetails(props.product.id);
  }
  const handleAddToCart = () => {
    props.addToCart(props.product.id);
  }
  return (
    <Card variant="outlined">
      <CardMedia
        component="img"
        alt={props.product.title}
        image={ props.product.imgUrl }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h1">
          {props.product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { props.product.shortDescription }
        </Typography>
      <div>
          {props.product.inventory > 0 ?
            <Button onClick={handleAddToCart}>Add to cart</Button>
            : <span>out of stock</span>
          }
        <Button onClick={ handleViewDetails }>details...</Button>
      </div>
      </CardContent>
    </Card>
  );
};

export default Product;