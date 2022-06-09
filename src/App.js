import { Container, } from '@mui/material';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Container className="App" >
      <Navbar />
      <Intro />
    </Container>
  );
}

export default App;
