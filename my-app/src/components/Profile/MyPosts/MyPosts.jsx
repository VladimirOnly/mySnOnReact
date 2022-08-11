import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
       props.addPost(values.newPostText);
     props.valueOf(values.newPostText = '')

    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}

let AddNewPostForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"newPostText"} component={"textarea"}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
)
}

AddNewPostForm = reduxForm ({form: "ProfileAddNewPostForm"})(AddNewPostForm)


export default MyPosts;
