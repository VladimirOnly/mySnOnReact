import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"


const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img src={'https://materializecss.com/images/sample-1.jpg'}/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                        <div>{props.profile.aboutMe}</div>
                <ProfileStatus status={"Hello my friends"}/>>
            </div>
        </div>

    )
}


export default ProfileInfo;
