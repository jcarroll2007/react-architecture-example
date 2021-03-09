// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from './redux/Provider';
import { Provider as ThemeProvider } from './theme/Provider';
import { RootView } from './views/Root';

function App() {
  return (
    <Router>
      <Provider>
        <ThemeProvider>
          <RootView />
        </ThemeProvider>
      </Provider>
    </Router>
  )
}

export default App;
