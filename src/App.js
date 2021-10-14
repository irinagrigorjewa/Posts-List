import React, {useRef, useState} from "react";
import './style/App.css';
import {PostItem} from './PostItem'
import PostList from "./PostList";
import MyButton from "./UI/MyButton";
import MyInput from "./UI/MyInput";
import PostForm from "./PostForm";
import Select from "./UI/Select";

function App() {

    const [selectedSort, setSelectedSort] = useState('');
    const [posts, setPosts] = useState([
        {id: "1", title: "Java", body: ""},
        {id: "2", title: "Python", body: ""},
        {id: "3", title: "Go", body: ""}]
    );
    const [search, setSearch] = useState('');

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const removePost = (oldPost) => {
        setPosts(posts.filter(post => post.id !== oldPost.id))
    }
    const sortPost = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare()))

    }

    function getSortedPost() {
        if (selectedSort)
            return [...posts].sort((a, b) => a[selectedSort].localeCompare())
        return posts;
    }

    const sortedPosts = getSortedPost()
    return (
        <div className="App">
            <div>
                <MyInput value={search}
                         onChange={e => setSearch(e.target.value)}
                />
                <Select
                    value={selectedSort}
                    onChange={sortPost}
                    defaultValue="Сортировка" option={[
                    {value: "title", name: "По названию"},
                    {value: "body", name: "По описанию"},
                ]}/>
            </div>
            <PostForm create={createPost}/>
            {posts.length ?
                <PostList posts={posts} remove={removePost} title="Посты про JS"/> :
                <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>}
        </div>
    );
}

export default App;
