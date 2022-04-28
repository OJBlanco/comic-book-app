import { FC } from 'react'

import { Typography } from 'antd'

const { Title } = Typography

import { Content, Footer, Header, Layout } from './styles/main.layout'

/**
 * @param props Props
 * @param props.children ReactNode
 * @returns ReactElement
 */
export const MainLayout: FC = ({ children }) => {
  return (
    <Layout>
      <Header>
        <Title>ComicBook</Title>
      </Header>
      <Content>{children}</Content>
      <Footer>Developed by OBlanco 2022</Footer>
    </Layout>
  )
}
