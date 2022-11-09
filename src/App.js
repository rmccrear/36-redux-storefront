import Header from './components/Header';
import Footer from './components/Footer';
import CategoryChooser from './components/CategoryChooser';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

import './App.css';

import { allCategories, items } from './__fixtures__';

const shopName = "Fancy Teas";

const addToCart = (id) => {
  console.log('add to cart:', id);
}

const viewDetails = (id) => {
  console.log('view details:', id);
}

function App() {
  return (
    <div className="App">
      <Header shopName={ shopName }></Header>
      <CategoryChooser categories={allCategories} selectCategory={(slug)=>console.log('select', slug) } />
      <ProductList products={items} addToCart={addToCart} viewDetails={ viewDetails } />

      <Footer />
    </div>
  );
}

export default App;
