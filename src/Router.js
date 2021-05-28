import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { history } from "./history"
import Spinner from "./components/@vuexy/spinner/Loading-spinner"
import { ContextLayout } from "./layouts/Layout"

// Route-based code splitting
const error404 = lazy(() => import("./views/404"))
const apex = lazy(() => import("./views/AppLevel"))
const chartjs = lazy(() => import("./views/Learning_Progression"))
const FilterBar = lazy(() => import('./views/components/TopBar'))



// Set Layout and Component Using App Route
const RouteConfig = ({ component: Component, fullLayout, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return (
        <ContextLayout.Consumer>
          {context => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : ''
                ? context.horizontalLayout
                : context.VerticalLayout
            return (
              <LayoutTag {...props} permission={props.user}>
                <Suspense fallback={<Spinner />}>
                  <FilterBar/>
                  <Component {...props} />
                </Suspense>
              </LayoutTag>
            )
          }}
        </ContextLayout.Consumer>
      )
    }}
  />
)


const AppRoute = RouteConfig

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <AppRoute path="/" exact component={apex} />
          <AppRoute path="/bucket2" component={chartjs} />
          <AppRoute component={error404} fullLayout />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter
