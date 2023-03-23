import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import store from './redux/redux-store'
import state from "./redux/store";





let renderEntireTree =(state)=>{

    ReactDOM.render(
        <BrowserRouter>
            <App

                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
                store={store}
            />
        </BrowserRouter>, document.getElementById('root'))

}

renderEntireTree(store.getState())
store.subscribe(()=>{
    let state = store.getState()
    renderEntireTree(state)
})

