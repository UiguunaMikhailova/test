import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { formSlice } from '../../store/reducers/FormSlice';
import { CardForm, FormInputs } from '../../types';
import './form.css';

export default function Form() {
  const { isSavingForm, formTitle, formPrice, formDescription } =
    useAppSelector((state) => state.FormSlice);

  const dispatch = useAppDispatch();
  const { setFormInputs, toggleIsSaveForm, addFormCard, resetFormInputs } =
    formSlice.actions;

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isDirty },
  } = useForm<FormInputs>({ mode: 'onChange' });

  useEffect(() => {
    watch((value) => {
      const { title, description, price } = value;
      dispatch(
        setFormInputs({
          title,
          description,
          price,
        } as FormInputs)
      );
    });
  }, [watch]);

  const onSubmit = (data: FormInputs) => {
    updateCards({
      title: data.title,
      description: data.description,
      price: data.price,
      file: URL.createObjectURL(data.file![0]),
    });
    reset();
  };

  function updateCards(card: CardForm) {
    dispatch(toggleIsSaveForm(true));
    setTimeout(() => {
      dispatch(toggleIsSaveForm(false));
      dispatch(addFormCard(card));
      dispatch(resetFormInputs());
    }, 1000);
  }

  return (
    <div className='form-wrapper' role='form'>
      <h3 className='form__title' id='form__title'>
        Create personal card
      </h3>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <div className='form__input-wrapper'>
          <label className='form__label' htmlFor='title'>
            Title
          </label>
          {errors.title && <p className='form__error-msg'>Incorrect title</p>}
        </div>
        <input
          className='form__input'
          type='text'
          placeholder='Title...'
          value={formTitle}
          {...register('title', { required: true })}
        />
        <div className='form__input-wrapper'>
          <label className='form__label' htmlFor='description'>
            Description
          </label>
          {errors.description && (
            <p className='form__error-msg'>Incorrect description</p>
          )}
        </div>
        <input
          className='form__input'
          type='text'
          placeholder='Description...'
          value={formDescription}
          {...register('description', { required: true })}
        />
        <div className='form__input-wrapper'>
          <label className='form__label' htmlFor='price'>
            Price
          </label>
          {errors.price && <p className='form__error-msg'>Incorrect price</p>}
        </div>
        <input
          className='form__input'
          type='text'
          placeholder='Price...'
          value={formPrice}
          {...register('price', { required: true })}
        />
        <label className='form__label' htmlFor='file'>
          Choose a picture:
        </label>
        <input
          type='file'
          accept='image/png, image/jpeg'
          {...register('file', { required: true })}
        />
        {errors.file && (
          <p className='form__error-msg'>This field is required</p>
        )}
        <button
          className='button'
          type='submit'
          disabled={!!Object.keys(errors).length || !isDirty}
        >
          Submit
        </button>
      </form>
      <p hidden={!isSavingForm} className='form__title'>
        Creating the card...
      </p>
    </div>
  );
}
