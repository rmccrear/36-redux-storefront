import { Container } from '@mui/system';

import Header from './components/Header';
import Footer from './components/Footer';
import CategoryChooser from './components/CategoryChooser';
import ProductList from './components/ProductList';
// import ProductDetails from './components/ProductDetails';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setCatalog, setCategories, setCurrentCategory, viewItemDetails
} from './store';

import './App.css';

import { allCategories, items } from './__fixtures__';
import ProductDetails from './components/ProductDetails';

const shopName = "Fancy Teas";

const addToCart = (id) => {
  console.log('add to cart:', id);
}

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

  // const currentCategory = 'home-decor';
  const selectCategory = (slug) => {
    dispatch(setCurrentCategory(slug));
  }

  const viewDetails = (id) => {
    console.log('view details:', id);
    const action = viewItemDetails(id);
    dispatch(action);
  }

  const handleCloseDetails = () => {
    const action = viewItemDetails(null);
    dispatch(action);
  }

  return (
      <div className="App">
      <Container maxWidth="sm">

        <Header shopName={ shopName }></Header>
        <CategoryChooser categories={categories} selectCategory={ selectCategory } />
        <ProductDetails product={viewingItem} closeDetails={handleCloseDetails} /> 
        <ProductList products={catalog} currentCategory={currentCategory} addToCart={addToCart} viewDetails={ viewDetails } />
        <Footer />
      </Container>
      </div>
  );
}

export default App;
