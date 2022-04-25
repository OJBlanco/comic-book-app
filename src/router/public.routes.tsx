import { FC, lazy } from 'react'

import { Route, Switch } from 'react-router-dom'

import { MainLayout } from 'shared/layouts/main.layout'

const DashboardPage = lazy(() => import('pages/dashboard'))

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
      </Switch>
    </MainLayout>
  )
}
