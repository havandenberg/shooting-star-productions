import * as React from 'react';
import StarImg from '../assets/images/star.svg';
import l from '../ui/layout';
import th from '../ui/theme';

const Stars = () => {
  return (
    <l.FlexCentered>
      <l.Img size={[th.sizes.xs, th.sizes.icon]} src={StarImg} />
      <l.Div width={th.spacing.lg} />
      <l.Img size={[th.sizes.xs, th.sizes.icon]} src={StarImg} />
      <l.Div width={th.spacing.lg} />
      <l.Img size={[th.sizes.xs, th.sizes.icon]} src={StarImg} />
    </l.FlexCentered>
  );
};

export default Stars;
