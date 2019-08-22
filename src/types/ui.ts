import {
  Primitive,
  AliasObject,
  ThemeObject,
  Theme as BaseTheme,
} from 'onno-react';

export type StyleValue = string | number | Array<string | number>;
export interface StyleSet {
  [key: string]: StyleValue;
}

export type ButtonVariants = [
  { alias: 'primary'; value: AliasObject<Primitive> },
  { alias: 'secondary'; value: AliasObject<Primitive> },
  { alias: 'alternative'; value: AliasObject<Primitive> }
];

export type Color = string;

export interface ColorVariant extends ThemeObject {
  background: Color;
  color: Color;
}

export interface FontSizesObject<T extends Primitive> extends ThemeObject {
  xs: T;
  sm: T;
  md: T;
  main: T;
  h3: T;
  h2: T;
  h1: T;
}

export type FontSizes = FontSizesObject<string> & {
  base: FontSizesObject<number>;
};

export interface Theme extends BaseTheme {
  colors: {
    background: Color;
    black: Color;
    gray: Color;
    white: Color;
    brand: [
      { alias: 'primary'; value: Color },
      { alias: 'secondary'; value: Color }
    ];
    text: {
      main: Color;
      link: Color;
      alt: Color;
      inv: Color;
    };
    fill: {
      main: Color;
      alt: Color;
      inv: Color;
      invAlt: Color;
      debug: Color;
    };
    status: {
      info: Color;
      success: Color;
      failure: Color;
    };
    overlay: {
      dark: Color;
      medium: Color;
      light: Color;
    };
  };
  gradients: {
    black: string;
  };
  fontFamilies: {
    main: string;
    code: string;
  };
  fontSizes: FontSizes;
  fontWeights: {
    normal: number;
    bold: number;
  };
  lineHeights: [
    { alias: 'single'; value: 1 },
    { alias: 'heading'; value: Primitive },
    { alias: 'main'; value: Primitive }
  ];
  sizes: [
    { alias: 'zero'; value: 0 },
    { alias: 'fill'; value: '100%' },
    { alias: 'icon'; value: Primitive },
    { alias: 'xs'; value: Primitive },
    { alias: 'sm'; value: Primitive },
    { alias: 'md'; value: Primitive },
    { alias: 'lg'; value: Primitive },
    { alias: 'xl'; value: Primitive },
    { alias: 'xxl'; value: Primitive },
    { alias: 'xxxl'; value: Primitive },
    { alias: 'huge'; value: Primitive },
    { alias: 'gigantic'; value: Primitive }
  ];
  borderRadii: [
    { alias: 'none'; value: 0 },
    { alias: 'fill'; value: '100%' },
    { alias: 'icon'; value: Primitive },
    { alias: 'xs'; value: Primitive },
    { alias: 'sm'; value: Primitive },
    { alias: 'md'; value: Primitive },
    { alias: 'lg'; value: Primitive }
  ];
  borders: {
    button: string;
    divider: string;
    input: string;
    transparent: string;
  };
  outlines: {
    main: string;
  };
  outlineOffsets: {
    main: number;
    outer: number;
    inner: number;
  };
  scrollOptions: { duration: number; offset: Primitive; smooth: string };
  // prettier-ignore
  boxShadows: [
    { alias: "sm"; value: string },
    { alias: "lg"; value: string }
  ]
  transitions: {
    default: string;
  };
  heights: {
    header: string;
    input: string;
    navHeight: string;
  };
  widths: {
    input: string;
    maxContent: string;
    maxPage: string;
  };
  colorStyles: {
    main: ColorVariant;
  };
  textStyles: {
    heading: ThemeObject;
    main: ThemeObject;
    caps: ThemeObject;
  };
  buttonStyles: ButtonVariants;
  globalStyles: ThemeObject;
}
