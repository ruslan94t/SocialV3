import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";







function MyPosts(props) {
    return (

            <div>
                Mypost
                <div>
                    <textarea></textarea>
                    <button>Add Post</button>
                    <button>Remove Post</button>
                </div>
                <div className={s.posts}>
                   <Post />


                </div>
            </div>

    );
}

export default MyPosts;