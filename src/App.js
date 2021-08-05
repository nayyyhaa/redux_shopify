import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/header';
import ProductsGrid from './components/productsGrid';
import SelectedProduct from './components/selectedProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={ProductsGrid}/>
          <Route path="/product/:productId" component={SelectedProduct}/>
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
