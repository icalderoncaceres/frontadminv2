import React from 'react';
import {Route, Switch} from 'react-router';
import Panel from './panel/Panel.react';

/* rutes */
import PrivateRoute from './session/PrivateRoute.react';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div id="_app-main">

      <Switch>
        {/*
        <Route path="/login" component={Login}/>
        <PrivateRoute exact={true} path="/" component={Chat}/>
        <PrivateRoute path="/test" component={Home}/>
        */}
        <Route path="/panel" component={Panel}></Route>
      </Switch>
    </div>)
  }
}

/* default export */
export default App;
