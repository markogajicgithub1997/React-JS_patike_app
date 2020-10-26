import React from 'react';
import './App.css'
import Home from './Home'
import Header from './Header'
import Contact from './Contact'
import About from './About'
import PageNotFound from './PageNotFound'
import Detail from './Detail'
import Cart from './Cart'
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom' 
import {Provider} from './context'


function App() {
  return (
    <Provider>
    <Router>
    <div className='AppCss'>
        <Header />
        <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path = '/contact' component={Contact}></Route>
        <Route path = '/about' component={About}></Route>
        <Route path ='/detail' component={Detail}></Route>
        <Route path ='/cart' component={Cart}></Route>
        <Route component={PageNotFound}></Route>
        </Switch>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
