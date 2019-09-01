import * as React from 'react';
import { slide as BurgerMenu, Props } from 'react-burger-menu';
import l from '../ui/layout';
import th from '../ui/theme';
import { isSmall } from '../ui/utils';
import { navItemElements } from './nav';

interface State {
  isOpen: boolean;
}

class MobileNav extends React.Component<Props, State> {
  state = {
    isOpen: false,
  };

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;

    return isSmall() ? (
      <l.Div onClick={this.toggleOpen}>
        <BurgerMenu isOpen={isOpen} right styles={th.burgerMenuStyles}>
          {navItemElements}
        </BurgerMenu>
      </l.Div>
    ) : (
      <div />
    );
  }
}

export default MobileNav;
