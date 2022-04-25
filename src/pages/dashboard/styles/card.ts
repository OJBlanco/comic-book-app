import styled from 'styled-components'

import { Device } from 'assets/styles/variables'

export const ContainerCard = styled.button`
  background-color: transparent;
  background: transparent;
  cursor: pointer;
  outline: none;
  border: none;

  display: flex;
  flex-wrap: wrap;
  flex: 1

  &:hover {
    order-color: transparent;
    box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%),
      0 5px 12px 4px rgb(0 0 0 / 9%);
  }
`

export const Thumbnail = styled.div`
  flex: 1 1 30%;
  height: 23.75rem;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    object-fit: cover;
    width: auto;
  }

  @media screen and (max-width: ${Device.tableM}px) {
    flex: 1 1 100%;
    align-items: center;
    justify-content: center;

    img {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

export const Info = styled.div`
  flex: 1 1 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 2rem;

  @media screen and (max-width: ${Device.tableM}px) {
    flex: 1 1 100%;
    align-items: center;
    justify-content: center;
    padding-left: 0;
    padding-top: 1rem;
  }
`
