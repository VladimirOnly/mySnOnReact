import React from 'react';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
            {/*<MyPostsContainer store={props.store} profilePage={props.profilePage} dispatch={props.dispatch}/>*/}
        </div>

    )
}


export default Profile;
