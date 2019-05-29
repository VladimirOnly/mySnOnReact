import React from 'react';
import store from './Redux/redux-store';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


let rerenderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
    </BrowserRouter>, document.getElementById('root'));

}
rerenderEntireTree(store.getState());

// store.subscribe(rerenderEntireTree);
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});