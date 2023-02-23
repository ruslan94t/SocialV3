import React from 'react';
import s from "../Profile.module.css";







function ProfileInfo(props) {
    return (
        <div >
            <div>
                <img
                    className={s.contentMainBg}
                    src="https://media.cnn.com/api/v1/images/stellar/prod/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280" alt=""/>
            </div>
            <div className={s.descriptioBlock}>
                ava+desc
            </div>


        </div>
    );
}

export default ProfileInfo;