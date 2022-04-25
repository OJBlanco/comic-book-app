import styled from 'styled-components'

import { AnimateFadeIn } from 'assets/styles/animations'
import { Device } from 'assets/styles/variables'

export const ContainerList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 0;
  grid-row-gap: 1.5rem;
  margin: 1.5rem 0;
  ${AnimateFadeIn}
`

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  margin: 1.5rem 0;
  ${AnimateFadeIn}

  @media screen and (max-width: ${Device.tableS}px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: ${Device.tableS +
    1}px) and (max-width: ${Device.tableL}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${Device.tableL +
    1}px) and (max-width: ${Device.desktopS}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const ButtonCard = styled.button`
  background-color: transparent;
  background: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  max-width: 16.5rem;
  align-self: center;
  justify-self: center;

  .ant-card {
    .ant-card-cover {
      img {
        height: 23.75rem;
        object-fit: cover;
        width: 100%;
      }
    }
  }
`

export const ContainerNavbar = styled.nav`
  width: 100%;

  .ant-page-header {
    background-color: transparent;
    background: transparent;
  }
`
