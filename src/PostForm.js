import React, {useState} from 'react';
import MyInput from "./UI/MyInput";
import MyButton from "./UI/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        }
        create(newPost);
        // setPosts([...posts, {...post, id: Date.now()}]);
        setPost({title: '', body: ''})
        // setTitle('');
        // setBody('');
    }
    return (
        <form>
            {/*<input ref={ref}/>*/}
            <MyInput value={post.title}
                     type="text"
                     onChange={e => setPost({...post, title: e.target.value})}
                     placeholder="Название поста"/>
            <MyInput value={post.body}
                     onChange={e => setPost({...post, body: e.target.value})}
                     type="text"
                     placeholder="Описание поста"/>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>

    );
};

export default PostForm;
