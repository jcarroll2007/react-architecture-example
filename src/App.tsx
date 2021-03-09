// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { MonolithicCharacterList } from './components/MonolithicCharacterList';
import { Provider } from './redux/Provider';
import { HOME, CHARACTERS } from './routes';
import { Provider as ThemeProvider } from './theme/Provider';

function App() {
  return (
    <Router>
      <Provider>
        <ThemeProvider>
          <Switch>
            <Route exact path={HOME} render={() => <Redirect to={CHARACTERS} />} />
            <Route path={CHARACTERS} component={MonolithicCharacterList} />
          </Switch>
        </ThemeProvider>
      </Provider>
    </Router>
  )
}

export default App;
