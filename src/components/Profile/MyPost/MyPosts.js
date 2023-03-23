import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";





function MyPosts(props) {

    let postElem = props.posts.map(p=>  <Post
        key={p.id}
        message={p.message} id={p.id} />)

    let newpostElement = React.createRef();

   let addPost =()=>{

      props.dispatch(addPostActionCreator())


   }

   let onPostChange = ()=>{
       let text = newpostElement.current.value;
       props.dispatch(updateNewPostTextActionCreator(text))

   }

    return (

        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}
                        ref={newpostElement}>

                    </textarea>
                </div>
                <div>
                    <button onClick={addPost}>
                        Add Post
                    </button>
                </div>
            </div>
            <div className={s.posts}> {postElem} </div>
        </div>

    );
}

export default MyPosts;