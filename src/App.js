import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from './createReduxStore'
import AppShell from "./screens/AppShell";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function App() {
  return (
      <Provider store={store}>
          <AppShell/>
          <ReactNotification />
      </Provider>
  );
}

export default App;
