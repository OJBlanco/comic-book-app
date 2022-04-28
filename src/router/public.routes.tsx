import { FC, lazy } from 'react'

import { Route, Switch } from 'react-router-dom'

import { MainLayout } from 'shared/layouts/main.layout'

const DashboardPage = lazy(() => import('pages/dashboard'))
const DetailPage = lazy(() => import('pages/detail'))

/**
 * PublicRoutes
 *
 * @returns components
 */
export const PublicRoutes: FC = () => {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/">
          <DashboardPage />
        </Route>
        <Route exact path="/comic/:id">
          <DetailPage />
        </Route>
      </Switch>
    </MainLayout>
  )
}
