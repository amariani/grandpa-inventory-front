import fetch from 'isomorphic-unfetch';
import Card from '../components/Card';
import { Flex, Box } from 'reflexbox';

export default function Home({ products }) {
  return (
    <Box
      variant="container"
      // bg={{ _: '#00adef', sm: '#f4f4f4', md: 'black', lg: 'cyan', xl: 'gray' }}
      // width={{ _: 1, sm: 1, md: 1 / 2, lg: 1 / 4 }}
    >
      <Box mt={30} as="h2">
        Listado de Productos
      </Box>
      <Flex
        justifyContent="space-between"
        flexDirection={{ _: 'column', sm: 'row' }}
        alignItems={{ _: 'center', sm: 'flex-start' }}
        flexWrap="wrap"
      >
        {products.length > 0 &&
          products.map((p) => {
            return (
              <Box
                key={p.id}
                mt="50px"
                width={{ _: '100%', sm: '45%', md: '30%' }}
                alignSelf="stretch"
              >
                <Card {...p} />
              </Box>
            );
          })}
      </Flex>
    </Box>
  );
}

export async function getServerSideProps() {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/products`);
  const products = await res.json();

  return { props: { products } };
}
