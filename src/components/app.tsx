import { ThemeProvider } from 'emotion-theming';
import * as React from 'react';
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import styled from '@emotion/styled';
import Background from '../components/background';
import Global from '../ui/global';
import l from '../ui/layout';
import th from '../ui/theme';
import {
  CONTACT_PATH,
  SERVICES_PATH,
  TESTIMONIALS_PATH,
} from '../utils/constants';
import Contact from './contact';
import Footer from './footer';
import Header from './header';
import MobileNav from './mobile-nav';
import Nav from './nav';
import Services from './services';
import Testimonials from './testimonials';

const Main = styled(l.Div)({
  height: '100%',
  margin: '0 auto',
  maxWidth: th.widths.maxPage,
  minHeight: '100vh',
  position: 'relative',
});

interface State {
  showIntro: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    showIntro: true,
  };

  toggleShowIntro = (showIntro: boolean) => {
    this.setState({ showIntro });
  };

  render() {
    const { showIntro } = this.state;
    return (
      <Router>
        <ThemeProvider theme={th}>
          <Main id="top">
            <Nav />
            <MobileNav />
            <Header
              showIntro={showIntro}
              toggleShowIntro={this.toggleShowIntro}
            />
            <Switch>
              <Route exact path={SERVICES_PATH} component={Services} />
              <Route exact path={TESTIMONIALS_PATH} component={Testimonials} />
              <Route exact path={CONTACT_PATH} component={Contact} />
              <Redirect to={SERVICES_PATH} />
            </Switch>
            <Footer />
            <Background />
          </Main>
          <Global />
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
