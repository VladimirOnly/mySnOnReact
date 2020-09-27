import React from 'react';
import store from './Redux/redux-store';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "./StoreContext";
//import store from "./Redux/store";


let rerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store ={store}>
        {/*<App state={state} dispatch={store.dispatch.bind(store)} store={store}/>*/}
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'));

}
rerenderEntireTree();
// store.subscribe(rerenderEntireTree);
store.subscribe(() => {
    rerenderEntireTree();
});

