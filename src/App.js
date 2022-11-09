import Header from './components/Header';
import Footer from './components/Footer';
import CategoryChooser from './components/CategoryChooser';
import './App.css';

import { allCategories } from './__fixtures__';

const shopName = "Fancy Teas";

function App() {
  return (
    <div className="App">
      <Header shopName={ shopName }></Header>
      <CategoryChooser categories={allCategories} selectCategory={(slug)=>console.log('select', slug) } />
      <Footer />
    </div>
  );
}

export default App;
