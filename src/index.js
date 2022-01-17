import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux"
import {Provider} from "react-redux"
import App from './App';
import reducer from './redux/reducer';
 

const myStore =  createStore(reducer)
ReactDOM.render(
    <Provider store = {myStore}>
        < App/>
    </Provider>
,document.getElementById('root')
);


