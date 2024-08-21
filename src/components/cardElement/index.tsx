import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { productDefaultImage } from '../../constants';
import './cardElement.css';
import '../card/card.css';

export default function CardElement() {
  const { products } = useAppSelector((state) => state.ProductsSlice);
  const { id } = useParams();
  const navigate = useNavigate();
  const card = products[Number(id)];

  return (
    <>
      {card ? (
        <div className='modal'>
          <div className='modal__card'>
            <div className='modal__image'>
              <img
                src={
                  card.image === null ? productDefaultImage : `${card.image}`
                }
                alt='poster'
              />
            </div>
            <div className='modal__content'>
              <div className='modal__title'>{card.title}</div>
              <div className='product__price-wrapper'>
                <span className='product__price-text'>
                  Category:{' '}
                  <div className='product__price'>{card.category}</div>
                </span>
                <span className='product__price-text'>
                  Price: <div className='product__price'>{card.price}</div>
                </span>
              </div>
              <div className='modal__overview'>
                Overview: {card.description}
              </div>
            </div>
          </div>
          <button className='button' onClick={() => navigate(-1)}>
            Go back
          </button>
        </div>
      ) : (
        <Navigate to='/products' />
      )}
    </>
  );
}
