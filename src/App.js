import { Container } from '@mui/system';

import Cart from './components/Cart';
import Drawer from '@mui/material/Drawer';
import Header from './components/Header';
import Footer from './components/Footer';
import CategoryChooser from './components/CategoryChooser';
import ProductList from './components/ProductList';
// import ProductDetails from './components/ProductDetails';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setCatalog, setCategories, setCurrentCategory, viewItemDetails, addToCart,
  openCart, closeCart
} from './store';

import './App.css';

import { allCategories, items } from './__fixtures__';
import ProductDetails from './components/ProductDetails';

const shopName = "Fancy Teas";

const fetchCatalog = async () => {
  return items;
}
const fetchCategories = async () => {
  return allCategories;
}

function App() {
  const dispatch = useDispatch();
  const catalog = useSelector(state => state.catalog);
  const categories = useSelector(state => state.categories);
  const cartIsOpen = useSelector(state => state.cartIsOpen);

  const currentCategory = useSelector((state) => state.currentCategory );

  const viewingItem = useSelector(state => state.viewingItem);
  useEffect(() => {
    (async () => {
      const catalog = await fetchCatalog();
      const categories = await fetchCategories();
      dispatch(setCatalog(catalog));
      dispatch(setCategories(categories));
    })();
  }, [dispatch]);

  const selectCategory = (slug) => {
    dispatch(setCurrentCategory(slug));
  }

  const viewDetails = (id) => {
    console.log('view details:', id);
    const action = viewItemDetails(id);
    dispatch(action);
  }

  const handleAddToCart = (id) => {
    console.log('add to cart:', id);
    dispatch(addToCart(id));
  }

  const handleCloseDetails = () => {
    const action = viewItemDetails(null);
    dispatch(action);
  }

  const handleCloseCart = () => {
    console.log('close cart');
    dispatch(closeCart());
  }

  return (
      <div className="App">
      <Container maxWidth="sm">

        <Header shopName={ shopName }></Header>
        <Drawer
          anchor="right"
          open={cartIsOpen}
          onClose={handleCloseCart}
        >
          <Cart />
        </Drawer>
        <CategoryChooser categories={categories} selectCategory={ selectCategory } />
        <ProductDetails product={viewingItem} closeDetails={handleCloseDetails} /> 
        <ProductList products={catalog} currentCategory={currentCategory} addToCart={handleAddToCart} viewDetails={ viewDetails } />
        <Footer />
      </Container>
      </div>
  );
}

export default App;
