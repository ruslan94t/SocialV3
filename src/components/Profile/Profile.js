import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";







function Profile(props) {
    return (
        <div className={s.content}>
         <ProfileInfo/>
           <MyPosts
               addPost={props.addPost}
               posts={props.state.posts} />

        </div>
    );
}

export default Profile;