import preset from '@rebass/preset';

export default {
  ...preset,
  variants: {
    ...preset.variants,
    container: {
      mx: 'auto',
      maxWidth: 1200,
      width: '100%',
      px: 30,
    },
    inlineBadge: {
      color: 'white',
      bg: 'secondary',
      p: 1,
      mr: 1,
      borderRadius: 'default',
      display: 'inline',
    },
  },
  breakpoints: ['360px', '576px', '768px', '992px', '1200px'],
};
