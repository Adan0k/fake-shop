import { useEffect } from 'react'
import { getProducts, getCategories } from './redux/action'
import { useDispatch } from 'react-redux'
import GlobalStyle from './GlobalStyles';
import Header from './components/Header';
import Product from './components/Product';
import ProductGrid from './components/ProductGrid';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    getProducts(dispatch);
    getCategories(dispatch);
  }, [])

  return (
    <div className='App'>
      <GlobalStyle />
      <Cart />
      <Header />
      <Routes>
        <Route path='/'>
          <Route index element=<ProductGrid /> />
          <Route path='product/:id' element={<ProductDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
