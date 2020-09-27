import React from 'react';

import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialog-reducer";
import Dialogs from "./DIalogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {
            store => {
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            }
            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body))
            }

            return <Dialogs updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={store.getState().dialogsPage}/>
        }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer;
