import React from 'react';
import s from './Dialogs.module.css';
import  {NavLink} from "react-router-dom";


const DialogItem = (props)=>{
    return <div className={s.dialog+' '+s.active}>
        <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
}

const Message  = (props)=>{
    return <div className={s.message}>{props.message}</div>
}


function Dialogs(props) {


    const dialogs =[
        {id:0, name:"Dima"},
        {id:1, name:"Sasha"},
        {id:2, name:"Yulya"},
        {id:3, name:"Ekaterina"},
    ];
    const messages = [
        {id:0, message:"hi"},
        {id:1, message:"how you it  kama"},
        {id:2, message:"yo yo"},
        {id:3, message:"yo yo eeeee"},
        {id:4, message:"yo yo new yo"},
    ]
let dialogsElements = dialogs.map(d=> <DialogItem
    key={d.id}
    name={d.name} id={d.id} />)
    let messageElements = messages.map(m=> <Message key={m.id} message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;