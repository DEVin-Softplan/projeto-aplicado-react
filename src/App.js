import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { ThemeProvider } from 'styled-components';
import { Router } from './routes/Router';
import { GlobalStyle } from './themes/GlobalStyles';
import { myTheme, myThemeDark } from './themes/themes';

function App() {
  const [dark, setDark] = useState(true);

  return (
    <>
      <ThemeProvider theme={dark ? myThemeDark : myTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
