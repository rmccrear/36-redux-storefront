import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const shopName = "Fancy Teas";

function App() {
  return (
    <div className="App">
      <Header shopName={ shopName }></Header>
      <Footer />
    </div>
  );
}

export default App;
