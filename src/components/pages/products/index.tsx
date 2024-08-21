import Layout from '../../../components/layout';
import CardList from '../../../components/cardList';
import Pagination from '../../../components/pagination';
import './products.css';

export default function Products() {
  return (
    <Layout>
      <div className='products'>
        <CardList />
        <Pagination />
      </div>
    </Layout>
  );
}
