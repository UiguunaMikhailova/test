import { Link } from 'react-router-dom';
import { productDefaultImage } from '../../constants';
import { CardProps } from '../../types';
import './card.css';

export default function Card({ id, title, price, category, image }: CardProps) {
  return (
    <Link to={`${id}`} className='product' role='card'>
      <div className='product__picture-wrapper'>
        <img
          src={image === null ? productDefaultImage : `${image}`}
          alt={title}
          className='product__picture'
        />
      </div>
      <div className='product__title-wrapper'>
        <div className='product__title'>{title}</div>
        <div className='product__price-wrapper'>
          <span className='product__price-text'>
            Category: <div className='product__price'>{category}</div>
          </span>
          <span className='product__price-text'>
            Price: <div className='product__price'>{price}</div>
          </span>
        </div>
      </div>
    </Link>
  );
}
