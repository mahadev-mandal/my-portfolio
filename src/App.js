import { Container, } from '@mui/material';
import Contact from './components/Contact/Contact';
import Expriences from './components/Expriences/Expriences';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import RecentProjects from './components/RecentProjects/RecentProjects';
import Services from './components/Services/Services';

function App() {
  return (
    <Container className="App" >
      <Navbar />
      <Intro />
      <Services />
      <Expriences />
      <RecentProjects />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
