import Header from '../components/Header';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from '../components/GlobalStyles/GlobalStyles';

const theme = {
  colors: {
    primary: '#0f0',
    secondary: '#00f',
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header isDark />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
