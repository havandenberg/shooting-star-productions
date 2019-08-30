export type Scale = 'big' | 'small';

export type StyleValue = string | number | Array<string | number>;
export interface StyleSet {
  [key: string]: StyleValue;
}
