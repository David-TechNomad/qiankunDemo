import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  MemoryRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom'
import { Divider, Button } from 'antd'

import 'antd/dist/antd.min.css'
import './App.css'

import LibVersion from './components/LibVersion'
import HelloModal from './components/HelloModal'

import Home from './pages/Home'
const About = lazy(() => import('./pages/About'))

const RouteExample = () => {
  return (
    <MemoryRouter initialEntries={['/', '/about']} initialIndex={0}>
      <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react' : '/'}>
        <nav>
          <Link to="/">Home</Link>
          <Divider type="vertical" />
          <Link to="/about">About</Link>
        </nav>
        <Suspense fallback={null}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Suspense>
      </Router>
    </MemoryRouter>
  )
}

export default function App() {
  return (
    <div className="app-main">
      <Button
        onClick={() => {
          window.history.pushState({}, '去VueTable子应用页面', '/vue/table')
        }}
      >
        去VueTable子应用页面
      </Button>
      <LibVersion />
      <HelloModal />
      <Divider />
      <RouteExample />
    </div>
  )
}
