import styled from '@emotion/styled';
import Picture from './Picture';
import MaterialsList from './Materials';
import { Flex, Box } from 'reflexbox';

function Card({ title, description, price, images, materials }) {
  return (
    <CardStyled>
      <Box
        as="div"
        sx={{
          maxHeight: 250,
          overflow: 'hidden',
        }}
      >
        {images.length > 0 && <Picture images={images} />}
      </Box>
      <Flex className="body" flexDirection="column">
        {materials.length > 0 && <MaterialsList materials={materials} />}
        <Box as="h4" mb="1rem" fontSize={[4, 5]}>
          {title}
        </Box>
        <Box as="p" mb=".5rem" fontSize={[3, 4, 5]}>
          ${price}
        </Box>
        <Box as="p" fontSize={[1, 2]} lineHeight={1.2}>
          {description}
        </Box>
      </Flex>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  .body {
    padding: 20px;
    .description {
      line-height: 1.5;
    }
  }
`;

export default Card;
