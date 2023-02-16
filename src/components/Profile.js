import React from 'react';
import s from "./Profile.module.css";







function Profile(props) {
    return (
        <div className={s.content}>
            <div>
                <img src="https://media.cnn.com/api/v1/images/stellar/prod/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280" alt=""/>
            </div>
            <div>
                ava+desc
            </div>
            <div>
                Mypost
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>post1</div>
                    <div className={s.item}>post2</div>

                </div>
            </div>

        </div>
    );
}

export default Profile;