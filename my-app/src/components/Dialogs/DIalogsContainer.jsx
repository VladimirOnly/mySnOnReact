import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DIalogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialog-reducer";
import Dialogs from "./DIalogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogReducer;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
      <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogPage={state}/>
    )
}

export default DialogsContainer;
