import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";






function MyPosts(props) {

    let postElem = props.posts.map(p=>  <Post
        key={p.id}
        message={p.message} id={p.id} />)
    let newposrElement = React.createRef();
   let addPost =()=>{
       let text = newposrElement.current.value;
      props.addPost(text)
       newposrElement.current.value = "";
   }

    return (

        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea ref={newposrElement}></textarea>
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