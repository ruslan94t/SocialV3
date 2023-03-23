
const UPDATE_NEW_MESSAGE_BODY='UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE='SEND_MESSAGE';

let initialState = {
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
}

const dialogsReducer =(state=initialState, action)=>{



    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body =  state.newMessageBody = action.body;
            state.messages.push({id:9, message: body})
            this.state.newMessageBody = action.body='';
            return state;
        default:
            return state;
    }


}
export let sendMessageCreator = ()=>({type:SEND_MESSAGE})

export let updateNewMessageBodyCreator = (body)=>({
    type:UPDATE_NEW_MESSAGE_BODY, body:body
})



export default dialogsReducer;