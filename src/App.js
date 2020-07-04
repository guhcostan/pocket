import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import {HomeScreen} from "./screens/HomeScreen";
import {Provider} from "react-redux";
import createStore from './createReduxStore'
import store from "./createReduxStore";

function App() {
  return (
      <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/">
            <HomeScreen/>
          </Route>
        </Switch>
      </Router>
      </Provider>
  );
}

export default App;
