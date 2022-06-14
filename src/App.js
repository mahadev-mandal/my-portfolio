import { Container } from '@mui/material';
import Contact from './components/Contact/Contact';
import Expriences from './components/Expriences/Expriences';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import RecentProjects from './components/RecentProjects/RecentProjects';
import Services from './components/Services/Services';
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  typography: {
    fontFamily: [
      'Gumela'
    ].join(','),
  },
});
theme.typography.h3 = {
  fontSize: '40px',
  [theme.breakpoints.up('md')]: {
    fontSize: '50px',
  },
};
theme.typography.h2 = {
  fontSize: '50px',
  [theme.breakpoints.up('md')]: {
    fontSize: '60px',
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container className="App" >
          <Navbar />
          <Intro />
          <Services />
          <Expriences />
          <RecentProjects />
          <Contact />
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
