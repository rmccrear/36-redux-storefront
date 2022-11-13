import CloseIcon from '@mui/icons-material/Close';
import { Button, Card, CardContent, CardMedia, Dialog, DialogTitle, DialogContent, IconButton, Typography } from "@mui/material";

const ProductDetails = (props) => {
  const { product } = props;
  const handleAddToCart = () => props.addToCart(product.id);
  const handleCloseDetails = () => props.closeDetails();
  return (
    <Dialog
      open={ !!product }
      onClose={handleCloseDetails}
    >
      <DialogTitle>
        <IconButton data-testid="close-details-button" onClick={handleCloseDetails}>
            <CloseIcon />
        </IconButton>
        <Typography gutterBottom variant="h2" component="div">
          {product?.title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Card variant="outline">
          <CardMedia
            component="img"
            alt={product?.title}
            image={ product?.imgUrl }
          />
          <CardContent>
            <h3>{ product?.shortDescription }</h3>
            <p>{ product?.description }</p>
            <div>
              { product?.inventory > 0 ?
                <Button onClick={handleAddToCart}>Add to cart</Button>
                : <span>Out of stock</span>
              }
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}

export default ProductDetails;