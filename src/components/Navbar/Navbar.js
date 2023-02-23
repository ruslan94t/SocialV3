import React from 'react';
import s from "./Navbar.module.css";
import {Link} from "react-router-dom";


function Navbar(props) {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <Link className={s.active} to="/profile">Portfolie</Link>
            </div>
            <div className={s.item}>
                <Link to="/dialogs">Messages</Link>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;