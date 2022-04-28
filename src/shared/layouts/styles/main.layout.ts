import { Layout as LayoutComponent } from 'antd'
import styled from 'styled-components'

export const Layout = styled(LayoutComponent)`
  height: auto;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`

export const Header = styled(Layout.Header)`
  align-items: center;
  background: #cfd8dc;
  display: flex;
  justify-content: center;

  h1 {
    margin: 0;
    text-align: center;
    font-weight: 500;
  }
`

export const Content = styled(Layout.Content)`
  flex: 1 0 auto;
  padding: 0 2rem;
`

export const Footer = styled(Layout.Footer)`
  flex-shrink: 0;
  text-align: center;
`
