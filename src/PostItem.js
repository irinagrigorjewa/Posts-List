import React from 'react';
import MyButton from "./UI/MyButton";

export const PostItem = (props) => {

    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{props.number}. {props.post.title}</strong><p/>
                    {props.post.body}
                </div>
                <div className="post__btn">
                    <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
                </div>
            </div>
        </div>
    );

}

export default PostItem;
