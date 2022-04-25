import { css } from 'styled-components'

import MontserratBlack from 'fonts/Montserrat-Black.ttf'
import MontserratBold from 'fonts/Montserrat-Bold.ttf'
import MontserratLight from 'fonts/Montserrat-Light.ttf'
import MontserratMedium from 'fonts/Montserrat-Medium.ttf'
import MontserratRegular from 'fonts/Montserrat-Regular.ttf'
import MontserratThin from 'fonts/Montserrat-Thin.ttf'

import { FontFamily } from './variables'

export const FONT_FACES = css`
  @font-face {
    font-family: ${FontFamily};
    src: url(${MontserratThin}) format('truetype');
    font-weight: 200;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: ${FontFamily};
    src: url(${MontserratLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: ${FontFamily};
    src: url(${MontserratRegular}) format('truetype');
    font-style: normal;
    font-weight: 400;
    font-display: block;
  }

  @font-face {
    font-family: ${FontFamily};
    font-style: normal;
    font-weight: 500;
    font-display: block;
    src: url(${MontserratMedium}) format('truetype');
  }

  @font-face {
    font-family: ${FontFamily};
    font-style: normal;
    font-weight: 600;
    font-display: block;
    src: url(${MontserratBold}) format('truetype');
  }

  @font-face {
    font-family: ${FontFamily};
    font-style: normal;
    font-weight: 900;
    font-display: block;
    src: url(${MontserratBlack}) format('truetype');
  }
`
