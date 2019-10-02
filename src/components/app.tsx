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
import Intro from './intro';
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
    showIntro: Boolean(localStorage.getItem('show-intro')),
  };

  toggleShowIntro = (showIntro: boolean) => {
    this.setState({ showIntro });
  };

  render() {
    return (
      <Router>
        <ThemeProvider theme={th}>
          <Main id="top">
            <Intro toggleShowIntro={this.toggleShowIntro} />
            <Nav />
            <MobileNav />
            <Header />
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
