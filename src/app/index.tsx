import { Routes, Route } from 'react-router-dom';
import Home from '../components/pages/home';
import Products from '../components/pages/products';
import FormPage from '../components/pages/formPage';
import NotFound from '../components/pages/notFound';
import CardElement from '../components/cardElement';

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={`products/:id`} element={<CardElement />} />
        <Route path='products' element={<Products />} />
        <Route path='/' element={<Home />} />
        <Route path='form' element={<FormPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
