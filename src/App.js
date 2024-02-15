import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import styled from 'styled-components'
import {AboutPage,Home,SingleProduct,
  Cart,Checkout,Private,Error,Product,AuthWrapper} from './pages'


function App() {
  return (
        <AuthWrapper> 
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path='/' exact>
              <Home />
        </Route>
        <Route path='/about' exact>
              <AboutPage />
        </Route>
        <Route path='/cart' exact>
              <Cart />
        </Route>
        <Route path='/products' exact>
              <Product />
        </Route>
        <Route path='/products/:id' children={<SingleProduct />} exact />
        <Private path='/checkout' exact>
              <Checkout />
        </Private>
        <Route path='/*' exact>
              <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
    </AuthWrapper>
  )
}



export default App
