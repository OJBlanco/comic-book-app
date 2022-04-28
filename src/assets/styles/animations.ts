import { css, keyframes } from 'styled-components'

const FadeIn = keyframes`
  0% { 
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const AnimateFadeIn = css`
  -webkit-animation: ${FadeIn} 0.75s ease-in-out;
  animation: ${FadeIn} 0.75s ease-in-out;
`
