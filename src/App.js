import './App.css';
import Home from './pages/Home'
import { useEffect } from 'react'
import Blog from './pages/Blog'
import CartCtxProvider from './store/CartCtxProvider';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/hoc/Layout';
import { useDispatch } from 'react-redux';
import { fetchBlogData } from './store/redux/slice-http';
import ProductDescription from './components/Product/ProductDescription';
import Products from './pages/Products';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogData());
  }, [dispatch]);
  return (
    <CartCtxProvider>
      <Layout>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Blog />} path="/blog" />
          <Route element={<ProductDescription />} path="/products/:category/:id" exact />
          <Route element={<Products />} path="/products/:category" />
        </Routes>
      </Layout>
    </CartCtxProvider>

  );
}

export default App;
