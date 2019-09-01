import { Theme, globalStyle } from 'onno-react';
import * as React from 'react';
import { Global, css } from '@emotion/core';
import { globalStyles } from '../ui/theme';

const theme: Theme = {
  globalStyles,
};

const GlobalStyles = () => (
  <>
    <Global
      styles={css`
        @keyframes move-twink-back {
          from {
            background-position: 0 0;
          }
          to {
            background-position: -10000px 5000px;
          }
        }
      `}
    />
    <Global styles={globalStyle({ theme })} />
  </>
);

export default GlobalStyles;
