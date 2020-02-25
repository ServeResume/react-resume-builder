import { css } from 'styled-components';
import breakpoints from './breakpoints';

// use ${unit} in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
const pxToEm = (px) => `${(px - 1) / 16}em`;

export const media = {
  // If sm =768 then all screens NOT including 768 will be applied
  xs: (...args) => css`
    @media(max-width: ${pxToEm(breakpoints.sm)}) {
      ${css(...args)}
    }
  `,
  sm: (...args) => css`
    @media(max-width: ${pxToEm(breakpoints.md)}) {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    @media(max-width: ${pxToEm(breakpoints.lg)}) {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    @media(max-width: ${pxToEm(breakpoints.xl)}) {
      ${css(...args)}
    }
  `,
  xl: (...args) => css`
    @media(min-width: ${pxToEm(breakpoints.xl)}) {
      ${css(...args)}
    }
  `,
};
