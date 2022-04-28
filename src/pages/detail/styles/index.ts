import styled from 'styled-components'

import { Device } from 'assets/styles/variables'

export const ContianerAvatars = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  .ant-comment {
    &:not(:last-child) {
      margin-right: 2.5rem;
    }

    .ant-comment-content {
      display: flex;
      align-items: center;
    }
  }
`

export const BodyCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.75fr;
  grid-template-rows: 1fr;
  grid-column-gap: 1.5rem;
  grid-row-gap: 0px;

  @media screen and (max-width: ${Device.tableM}px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
    grid-column-gap: 0px;
    grid-row-gap: 1.5rem;
  }
`

export const MainInfo = styled.div`
  @media screen and (max-width: ${Device.tableM}px) {
    grid-area: 2 / 1 / 3 / 2;
  }
`

export const Poster = styled.div`
  display: flex;
  justify-content: flex-end;

  img {
    max-width: 400px;
    height: auto;
  }
  @media screen and (max-width: ${Device.tableM}px) {
    grid-area: 1 / 1 / 2 / 2;
    justify-content: center;
  }
`
