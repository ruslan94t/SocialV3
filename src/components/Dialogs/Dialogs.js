import React from 'react';
import s from './Dialogs.module.css';
import  {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




function Dialogs(props) {



let dialogsElements = props.dialogs.map(d=> <DialogItem
    key={d.id}
    name={d.name} id={d.id} />)
    let messageElements = props.messages.map(m=> <Message key={m.id} message={m.message} />)

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