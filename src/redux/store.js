import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";



let store ={
    _state :{

        profilePage:{
            posts : [
                {id: 0, message: "hi", likesCount: 12},
                {id: 1, message: "how you", likesCount: 3},
                {id: 2, message: "its began", likesCount: 2},
            ],
            newPostText:'it kama',
        },
        dialogsPage:{
            dialogs :[
                {id:0, name:"Dima"},
                {id:1, name:"Sasha"},
                {id:2, name:"Yulya"},
                {id:3, name:"Ekaterina"},
            ],
            messages :[
                {id:0, message:"hi"},
                {id:1, message:"how you it  kama"},
                {id:2, message:"yo yo"},
                {id:3, message:"yo yo eeeee"},
                {id:4, message:"yo yo new yo"},
            ],
            newMessageBody:'',
        },


    },
    getState(){
        return this._state;
    },
    _callSubscriber(){
        console.log('state change')
    },
    addPost(){
        let newPost={
            id:5,
            message:this._state.profilePage.newPostText,
            likesCount:0,

        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText ='';
        this._callSubscriber(this._state)

    },
    updateNewPostText (newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },
    subscribe(observer){
        this._callSubscriber=observer;
    },
    dispatch(action){
     this._state.profilePage= profileReducer(this._state.profilePage, action)
     this._state.dialogsPage= dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }

}






window.store = store;
export default store;