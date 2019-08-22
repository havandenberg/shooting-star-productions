import * as React from 'react';
import { globalStyle } from 'onno-react';
import { Global, css } from '@emotion/core';
import theme from '../ui/theme';

const GlobalStyles = () => (
  <>
    <Global
      styles={css`
        @font-face {
          font-family: 'Font Family';
          src: url('../assets/fonts/Font Family.ttf') format('truetype');
        }
      `}
    />
    <Global styles={globalStyle({ theme })} />
  </>
);

export default GlobalStyles;
