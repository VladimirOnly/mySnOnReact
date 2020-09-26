import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} />
            {/*<MyPostsContainer store={props.store} profilePage={props.profilePage} dispatch={props.dispatch}/>*/}

        </div>

    )
}


export default Profile;
