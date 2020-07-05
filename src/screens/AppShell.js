import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {HomeScreen} from "./HomeScreen";
import {DashboardScreen} from "./DashboardScreen";
import {Provider, useSelector} from "react-redux";
import React from "react";
import Loader from "../components/Loader";
import {Screen} from "../styled-global";

const AppShell = (props) => {
    const loading = useSelector(state => state.loading)
    return  <Screen><Router>
        <Switch>
            <Route exact path="/">
                <HomeScreen/>
            </Route>
            <Route path="/dashboard">
                <DashboardScreen/>
            </Route>
        </Switch>
    </Router>
        <Loader show={loading}/>
    </Screen>
}
export default AppShell