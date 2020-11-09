import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom'
import { routes } from 'modules/routes'
import { createStore } from 'modules/store'
import { Layout } from 'components'
import 'antd/dist/antd.css'
import './App.scss'

const { store } = createStore()

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <Layout>
        {routes.map(route => <Route key={route.path} {...route} />)}
      </Layout>
    </HashRouter>
  </Provider>
)

export default App
