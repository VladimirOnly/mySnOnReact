import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={'https://techcrunch.com/wp-content/uploads/2017/12/genies-avatar.png?w=730&crop=1'} />
            {props.message}
            <div>
            <span>like</span>
                {props.likeCount}
            </div>
        </div>

    )
}

export default Post;