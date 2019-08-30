import * as React from 'react';
import l from '../ui/layout';
import th from '../ui/theme';
import withScroll from './hoc/with-scroll';

const Contact = () => (
  <>
    <l.Div
      justifyContent="center"
      display="flex"
      my={th.spacing.lg}
      width="100%">
      Ready to Partner?
    </l.Div>
  </>
);

export default withScroll(Contact);
