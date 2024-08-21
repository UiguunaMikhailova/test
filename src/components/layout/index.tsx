import Header from '../../components/header';
import { LayoutProps } from '../../types';

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
