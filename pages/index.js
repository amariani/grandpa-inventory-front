import fetch from 'isomorphic-unfetch';
import Card from '../components/Card';

export default function Home({ products }) {
  return (
    <div className="container">
      <h2>This is our home page</h2>
      {products.map((p) => {
        return <Card key={p.id} {...p} />;
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/products`);
  const products = await res.json();

  return { props: { products } };
}
