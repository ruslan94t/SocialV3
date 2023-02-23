import React from 'react';
import s from './Dialogs.module.css';






function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
         <div className={s.dialog+' '+s.active}>Dimic</div>
                <div className={s.dialog}>Victor</div>
                <div className={s.dialog}>Valerian</div>
                <div className={s.dialog}>Alina</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi </div>
                <div className={s.message}>How is your it kama</div>
                <div className={s.message}>yo yo</div>
            </div>
        </div>
    );
}

export default Dialogs;