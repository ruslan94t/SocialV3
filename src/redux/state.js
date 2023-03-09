import {renderEntireTree} from "../render";


let state ={

    profilePage:{
        posts : [
            {id: 0, message: "hi", likesCount: 12},
            {id: 1, message: "how you", likesCount: 3},
            {id: 2, message: "its began", likesCount: 2},
        ],
    },
    messagesPage:{
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
    },


}
export let addPost = (postMessage)=>{
    let newPost={
        id:5,
        message:postMessage,
        likesCount:0,

    }
    state.profilePage.posts.push(newPost)
    renderEntireTree(state)

}

export default state;