import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import store from './redux/state'
import state from "./redux/state";





let renderEntireTree =(state)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App
                addPost={store.addPost.bind(store)}
                state={store.getState()}
                updateNewPostText={store.updateNewPostText.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root'))

}

renderEntireTree(store.getState())
store.subscribe(renderEntireTree)

