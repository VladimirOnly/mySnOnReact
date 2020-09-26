import React from 'react';
import s from './newMsg.module.css';

const NewMsg = () => {

    return (
<div className={s.newMsg}>
    <textarea></textarea>
    <button>Send message</button>
</div>


    )
}

export default NewMsg;