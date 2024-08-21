import React from 'react';
import { CardForm } from '../../types';
import './formCard.css';

export default function FormCard({
  file,
  title,
  description,
  price,
}: CardForm) {
  return (
    <li className='form-card'>
      <div className='picture-wrapper'>
        <img
          className='form-card__picture'
          src={file}
          alt='personal-card-picture'
        />
      </div>
      <div>
        <div className='form-card__title'>Title: {title}</div>
        <div className='form-card__title'>Description: {description}</div>
        <div className='form-card__title'>Price: {price}</div>
      </div>
    </li>
  );
}
