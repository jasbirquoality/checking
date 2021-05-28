import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom"
import { Layout } from "./layouts/Layout"
import Spinner from "./components/@vuexy/spinner/Fallback-spinner"
import "./index.scss"

const LazyApp = lazy(() => import("./App"))


ReactDOM.render(
      <Suspense fallback={<Spinner/>}>
        <Layout>
            <LazyApp />
        </Layout>
      </Suspense>,
  document.getElementById("root")
);

