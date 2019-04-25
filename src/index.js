import React from 'react';
import state, {addPost, subscribe, updateNewPostText} from './Redux/state';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


let rerenderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </BrowserRouter>, document.getElementById('root'));

}
rerenderEntireTree(state);

subscribe(rerenderEntireTree);