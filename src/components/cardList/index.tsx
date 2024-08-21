import React from 'react';
import Card from '../../components/card';
import { useAppSelector } from '../../hooks/redux';
import { CardProps } from '../../types';
import { errorMessage } from '../../constants';
import './cardList.css';

export default function CardList() {
  const { products, isLoading, error } = useAppSelector(
    (state) => state.ProductsSlice
  );

  return (
    <div>
      {isLoading && <div className='loading'>Loading</div>}
      {error && <div className='info'>{errorMessage}</div>}
      {products.length ? (
        <div>
          <ul className='products'>
            {products.map((item: CardProps, index: number) => (
              <Card
                key={index}
                id={index}
                title={item.title}
                image={item.image}
                price={item.price}
                category={item.category}
                description={item.description}
              />
            ))}
          </ul>
        </div>
      ) : error ? (
        <></>
      ) : (
        <div className='info'>Sorry, no products were found by the request</div>
      )}
    </div>
  );
}
