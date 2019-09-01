import * as React from 'react';
import StarImg from '../assets/images/star.svg';
import l from '../ui/layout';
import th from '../ui/theme';

const Stars = () => {
  return (
    <l.FlexCentered>
      <l.Img size={[th.sizes.icon, th.sizes.sm]} src={StarImg} />
      <l.Div width={th.spacing.lg} />
      <l.Img size={[th.sizes.icon, th.sizes.sm]} src={StarImg} />
      <l.Div width={th.spacing.lg} />
      <l.Img size={[th.sizes.icon, th.sizes.sm]} src={StarImg} />
    </l.FlexCentered>
  );
};

export default Stars;
