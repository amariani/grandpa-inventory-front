import fetch from 'isomorphic-unfetch';
import Card from '../components/Card';
import { Flex, Box } from 'reflexbox';

export default function Home({ products }) {
  return (
    <Box variant="container">
      <h2>Listado de Productos</h2>
      {products.length > 0 &&
        products.map((p) => {
          return <Card key={p.id} {...p} />;
        })}
    </Box>
  );
}

export async function getServerSideProps() {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/products`);
  const products = await res.json();

  return { props: { products } };
}
