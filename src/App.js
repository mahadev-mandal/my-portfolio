import React, { useState } from 'react';
import { Container, CssBaseline } from '@mui/material';
import Contact from './components/Contact/Contact';
import Expriences from './components/Expriences/Expriences';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import RecentProjects from './components/RecentProjects/RecentProjects';
import Services from './components/Services/Services';
import './App.css'
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from './utils/themes';

export const themeContext = React.createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const darkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  }
  console.log('kjdkjjf')
  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Container className="App">
          <themeContext.Provider value={darkModeToggle}>
            <Navbar />
          </themeContext.Provider>
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
