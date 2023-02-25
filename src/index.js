import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';

const posts = [
    {id: 0, message: "hi", likesCount: 12},
    {id: 1, message: "how you", likesCount: 3},
    {id: 2, message: "its began", likesCount: 2},
];
const dialogs =[
    {id:0, name:"Dima"},
    {id:1, name:"Sasha"},
    {id:2, name:"Yulya"},
    {id:3, name:"Ekaterina"},
];
const messages = [
    {id:0, message:"hi"},
    {id:1, message:"how you it  kama"},
    {id:2, message:"yo yo"},
    {id:3, message:"yo yo eeeee"},
    {id:4, message:"yo yo new yo"},
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App
              posts={posts}
              dialogs={dialogs}
              messages={messages}
          />
      </BrowserRouter>

  </React.StrictMode>
);

