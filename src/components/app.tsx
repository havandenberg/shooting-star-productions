import * as React from 'react';
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import Global from '../ui/global';
import { Div, Text } from '../ui/layout';
import styled from '../ui/styled';
import theme from '../ui/theme';

const Main = styled(Div)({ maxWidth: theme.widths.maxPage });

Main.displayName = 'Main';

interface State {
  loading: boolean;
}

class App extends React.Component<{}, State> {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Main id="top">
            <Switch>
              <Route
                exact
                path="/"
                component={() => (
                  <Text as="h1" textAlign="center">
                    Shooting Star Productions
                  </Text>
                )}
              />
              <Redirect to="/" />
            </Switch>
          </Main>
          <Global />
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
