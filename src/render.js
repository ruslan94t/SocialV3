import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import {addPost} from "./redux/state";






export let renderEntireTree = (state)=>{
ReactDOM.render(
    <BrowserRouter>
            <App
                addPost={addPost}
                state={state}
      />
        </BrowserRouter>, document.getElementById('root'))
}

