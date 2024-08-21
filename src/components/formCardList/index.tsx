import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import FormCard from '../../components/formCard';
import './formCardList.css';

export default function FormCardList() {
  const { formCards } = useAppSelector((state) => state.FormSlice);

  return (
    <ul className='form-card-list'>
      {formCards.map((item, index) => {
        return (
          <FormCard
            key={index}
            title={item.title}
            description={item.description}
            price={item.price}
            file={item.file}
          />
        );
      })}
    </ul>
  );
}
