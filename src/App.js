import React, {Component} from 'react';
import Api from './component/api';
import Home from './component/home';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

class App extends Component {

render () {
  return (
    <Router>
    <div>
      <Switch>
        <Redirect exact from="/" to="/home" />
      <Route 
        path = '/home'
        component = {Home}/>
    
      <Route 
        path = '/yas'
        component = {Api}/>
        </Switch>
    </div>
    </Router>
  )


}
}

export default App;

// export default App () {
//   return (
//     <Router>
//       <Route />
    
//     </Router>
//   )
// }