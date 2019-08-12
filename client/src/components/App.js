import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Main from './Main'
import Post from './Post'
import View from './View'
import ListView from './ListView'

export default props => {
  return (
    <Router>
    <Provider store={store}>
        <Route exact path="/" component={Main} />
        <Route path="/post" component={Post} />
        <Route exact path="/view/:category/:subcategory" component={ListView} />
        <Route path="/view/:category/:subcategory/:id" component={View} />
    </Provider>
    </Router>
  )
}