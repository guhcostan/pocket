import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as firebase from 'firebase/app'
import 'firebase/analytics'
// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyAFZKNjKsD_2dMSC_IMtDAPVZMUX2hT4P8",
    authDomain: "pocket-dee64.firebaseapp.com",
    databaseURL: "https://pocket-dee64.firebaseio.com",
    projectId: "pocket-dee64",
    storageBucket: "pocket-dee64.appspot.com",
    messagingSenderId: "353368926247",
    appId: "1:353368926247:web:0377a68f43c1db75b04602",
    measurementId: "G-5NM36WBJRV"
})
firebase.analytics()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
