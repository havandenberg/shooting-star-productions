import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Scale } from '../../types/ui';
import { DivProps, divPropsSet } from '../layout';
import th from '../theme';

export const getButtonProps: (
  activeBG: string,
  inactiveBG: string,
  size?: Scale,
) => any = (activeBG, inactiveBG, size = 'big') => ({
  ':before': {
    background: activeBG,
    backgroundImage: activeBG,
    borderRadius: 'inherit',
    content: '""',
    display: 'block',
    height: '100%',
    left: 0,
    opacity: 0,
    position: 'absolute',
    top: 0,
    transition: th.transitions.default,
    width: '100%',
    zIndex: -1,
  },
  ':hover': {
    ':before': {
      opacity: 1,
    },
  },
  ':last-child': {
    marginRight: 0,
  },
  alignItems: 'center',
  background: inactiveBG,
  color: th.colors.black,
  cursor: 'pointer',
  display: 'flex',
  fontSize: size === 'big' ? th.fontSizes.lg : th.fontSizes.main,
  fontWeight: 500,
  justifyContent: 'center',
  padding: size === 'big' ? th.spacing.md : th.spacing.sm,
  position: 'relative',
  textAlign: 'center',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
  zIndex: 1,
  [th.breakpointQueries.small]: {
    padding: size === 'big' ? th.spacing.sm : th.spacing.sm,
  },
});

export const ButtonPrimary = styled('button')<DivProps & any>(
  ({
    activeBG = th.colors.brand.primary,
    inactiveBG = th.gradients.primary,
    size = 'big',
  }) => ({
    ...getButtonProps(activeBG, inactiveBG, size),
  }),
  ...divPropsSet,
);

export const LinkPrimary = styled(Link)<DivProps & any>(
  ({
    activeBG = th.colors.brand.primary,
    inactiveBG = th.gradients.primary,
    size = 'big',
  }) => ({
    ...getButtonProps(activeBG, inactiveBG, size),
  }),
  ...divPropsSet,
);

export const ButtonSecondary = styled('button')<DivProps & any>(
  ({
    activeBG = th.gradients.black,
    inactiveBG = th.colors.black,
    size = 'small',
  }) => ({
    ...getButtonProps(activeBG, inactiveBG, size),
    color: th.colors.brand.primary,
  }),
  ...divPropsSet,
);

export const LinkSecondary = styled(Link)<DivProps & any>(
  ({
    activeBG = th.gradients.black,
    inactiveBG = th.colors.black,
    size = 'small',
  }) => ({
    ...getButtonProps(activeBG, inactiveBG, size),
    color: th.colors.brand.primary,
  }),
  ...divPropsSet,
);
