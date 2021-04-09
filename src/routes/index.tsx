import React, { Suspense, Fragment, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from 'src/layouts';
import LoadingScreen from 'src/containers/LoadingView';

type Routes = {
  exact?: boolean;
  path?: string | string[];
  layout?: any;
  component?: any;
  routes?: Routes;
}[];

const routes = [
  {
    path: '/',
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: '/',
        component: lazy(() => import('../containers/MainView')),
      },
    ],
  },
];

export const renderRoutes = (routes: Routes = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Layout>
                {route.routes ? (
                  renderRoutes(route.routes)
                ) : (
                  <Component {...props} />
                )}
              </Layout>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

export default routes;
