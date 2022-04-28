import { FC, Suspense } from 'react'

import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from 'assets/styles/global-styles'
import { PublicRoutes } from 'router/public.routes'
import { CoverLoading } from 'shared/loadings/cover.loading'

import 'antd/dist/antd.css'

/**
 * @returns component
 */
const App: FC = () => {
  return (
    <Suspense fallback={<CoverLoading />}>
      <GlobalStyle />
      <BrowserRouter>
        <PublicRoutes />
      </BrowserRouter>
    </Suspense>
  )
}

export default App
