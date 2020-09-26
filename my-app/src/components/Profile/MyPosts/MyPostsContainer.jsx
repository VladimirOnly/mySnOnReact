import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = (props) => {

let state = props.store.getState();

    let addPost = () => {
     props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <StoreContext.Consumer>
<MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profileReducer.profilePage.posts}
newPostText={state.profileReducer.profilePage.newPostText}/>
        </StoreContext.Consumer>
    )
}


export default MyPostsContainer;
