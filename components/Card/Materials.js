import { Box } from 'reflexbox';

export default function Materials({ materials }) {
  return materials.map(({ name }) => (
    <Box variant="inlineBadge" as="p" bg="secondary">
      {name}
    </Box>
  ));
}
