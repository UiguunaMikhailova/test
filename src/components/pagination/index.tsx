import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { url } from '../../constants';
import { fetchData } from '../../store/reducers/ActionCreators';
import './pagination.css';

export default function Pagination() {
  const dispatch = useAppDispatch();

  function searchCards(url: string) {
    dispatch(fetchData(`${url}`));
  }

  useEffect(() => {
    searchCards(url);
  }, []);

  return <div></div>;
}
