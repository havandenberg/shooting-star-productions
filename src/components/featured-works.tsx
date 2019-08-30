import * as React from 'react';
import l from '../ui/layout';
import th from '../ui/theme';
import withScroll from './hoc/with-scroll';

const FeaturedWorks = () => (
  <>
    <l.Div
      justifyContent="center"
      display="flex"
      height="120vh"
      my={th.spacing.lg}
      width="100%">
      Featured Works
    </l.Div>
  </>
);

export default withScroll(FeaturedWorks);
