const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {

        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your IT'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Yo'},
        ],
        newMessageBody: ""

};

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
           // stateCopy.messages.push({id: 7, message: body});
            return {...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 7, message: body}]
            };

        default:
            return state;
    }
}


export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})


export default dialogReducer;
