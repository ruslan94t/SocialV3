
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_POST ='ADD-POST'



let initialState = {
    posts : [
        {id: 0, message: "hi", likesCount: 12},
        {id: 1, message: "how you", likesCount: 3},
        {id: 2, message: "its began", likesCount: 2},
    ],
    newPostText:'it kama',
}




 const profileReducer =(state=initialState, action)=>{




    switch (action.type){
        case ADD_POST:
            let newPost={id:5, message: state.newPostText, likesCount:0,}
            state.posts.push(newPost)
            state.newPostText ='';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
        default:
            return state;

    }




}
export let addPostActionCreator = ()=>({ type:ADD_POST})
export let updateNewPostTextActionCreator=(text)=>({
    type:UPDATE_NEW_POST_TEXT,
    text:text
})
export default profileReducer;