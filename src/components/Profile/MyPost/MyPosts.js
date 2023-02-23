import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


function MyPosts(props) {

    const posts = [
        {id: 0, message: "hi", likesCount: 12},
        {id: 1, message: "how you", likesCount: 3},
        {id: 2, message: "its began", likesCount: 2},
    ]
    let postElem = posts.map(p=>  <Post
        key={p.id}
        message={p.message} id={p.id} />)


    return (

        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add Post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postElem}

            </div>
        </div>

    );
}

export default MyPosts;