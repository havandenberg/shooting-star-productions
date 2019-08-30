import * as R from 'ramda';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Sticky from 'react-stickynode';
import styled from '@emotion/styled';
import InstagramImg from '../assets/images/instagram.svg';
import YoutubeImg from '../assets/images/youtube.svg';
import Background from '../components/background';
import l from '../ui/layout';
import th from '../ui/theme';
import ty from '../ui/typography';
import { INSTAGRAM_PATH, YOUTUBE_PATH } from '../utils/constants';
import { isDesktop } from '../utils/view';

const navItems = [
  { name: 'Services', path: '/services' },
  { name: 'Featured Works', path: '/featured-works' },
  { name: 'Contact', path: '/contact' },
];

const NavItem = styled(ty.Text)({
  '.active-link &': {
    color: th.colors.text.link,
  },
  ':hover': {
    color: th.colors.text.link,
  },
  color: 'white',
  cursor: 'pointer',
  padding: `${th.spacing.sm} ${th.spacing.md}`,
  transition: th.transitions.default,
});

interface State {
  hoverItem: string;
}

class Nav extends React.Component<{}, State> {
  state = {
    hoverItem: '',
  };

  setHoverItem = (hoverItem: string) => {
    this.setState({ hoverItem });
  };

  render() {
    const { hoverItem } = this.state;
    return (
      <div id="nav">
        <Sticky innerZ={100}>
          <l.FlexBetween position="relative">
            <l.Flex>
              <l.Div width={th.spacing.md} />
              <ty.Anchor
                height={th.sizes.icon}
                href={YOUTUBE_PATH}
                onMouseEnter={() => this.setHoverItem('youtube')}
                onMouseLeave={() => this.setHoverItem('')}
                rel="noopener noreferrer"
                target="_blank">
                <l.Img height="100%" src={YoutubeImg} />
              </ty.Anchor>
              <l.Div width={th.spacing.md} />
              <ty.Anchor
               height={th.sizes.icon}
                href={INSTAGRAM_PATH}
                onMouseEnter={() => this.setHoverItem('instagram')}
                onMouseLeave={() => this.setHoverItem('')}
                rel="noopener noreferrer"
                target="_blank">
                <l.Img height="100%" src={InstagramImg} />
              </ty.Anchor>
              {isDesktop() && (
                <>
                  <l.Div width={th.spacing.md} />
                  <ty.SmallText
                    color={
                      R.isEmpty(hoverItem) ? 'transparent' : th.colors.white
                    }
                    transition={th.transitions.default}>
                    {R.isEmpty(hoverItem)
                      ? ''
                      : R.equals(hoverItem, 'youtube')
                      ? '@nicolasandrews95'
                      : '@shootingstar.us'}
                  </ty.SmallText>
                </>
              )}
            </l.Flex>
            <l.Flex>
              {R.map(
                item => (
                  <NavLink
                    activeClassName="active-link"
                    exact
                    key={item.path}
                    to={item.path}>
                    <NavItem fontSize={th.fontSizes.main}>{item.name}</NavItem>
                  </NavLink>
                ),
                navItems,
              )}
            </l.Flex>
            <Background />
          </l.FlexBetween>
        </Sticky>
      </div>
    );
  }
}

export default Nav;
