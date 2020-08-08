import { Box, Flex } from 'reflexbox';

export default function Materials({ materials }) {
  return (
    <Flex flexWrap="wrap">
      {materials.map(({ id, name }) => (
        <Box key={id} variant="inlineBadge" as="span" fontSize=".7em">
          {name}
        </Box>
      ))}
    </Flex>
  );
}
