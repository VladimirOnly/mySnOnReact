const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'Its my first post', likesCount: 11}],
        newPostText: 'YO YO, New!'
    },
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.profilePage.newPostText,
                likesCount: 0
            };
            state.profilePage.posts.push(newPost);
            state.profilePage.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.profilePage.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}


    export const addPostActionCreator = () => ({
        type: ADD_POST
    })
    export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT, newText: text
    })


    export default profileReducer;
