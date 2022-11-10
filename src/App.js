import Header from './components/Header';
import Footer from './components/Footer';
import CategoryChooser from './components/CategoryChooser';
import ProductList from './components/ProductList';
// import ProductDetails from './components/ProductDetails';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setCatalog, setCategories, setCurrentCategory
} from './store';

import './App.css';

import { allCategories, items } from './__fixtures__';

const shopName = "Fancy Teas";

const addToCart = (id) => {
  console.log('add to cart:', id);
}

const viewDetails = (id) => {
  console.log('view details:', id);
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

  return (
      <div className="App">
        <Header shopName={ shopName }></Header>
        <CategoryChooser categories={categories} selectCategory={ selectCategory } />
        <ProductList products={catalog} currentCategory={currentCategory} addToCart={addToCart} viewDetails={ viewDetails } />
        <Footer />
      </div>
  );
}

export default App;
