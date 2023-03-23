import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/store";







function Profile(props) {
    return (
        <div className={s.content}>
         <ProfileInfo/>
           <MyPosts
               dispatch={props.dispatch}
               posts={props.profilePage.posts}
               newPostText={props.profilePage.newPostText}
           />

        </div>
    );
}

export default Profile;