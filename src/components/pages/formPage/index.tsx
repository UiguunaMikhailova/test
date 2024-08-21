import Form from '../../../components/form';
import FormCardList from '../../../components/formCardList';
import Layout from '../../../components/layout';

export default function FormPage() {
  return (
    <Layout>
      <div>
        <Form />
        <FormCardList />
      </div>
    </Layout>
  );
}
