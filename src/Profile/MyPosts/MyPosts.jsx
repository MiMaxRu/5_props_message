import React from 'react';//Подключение библиотеки React
import p from './MyPosts.module.css';//Подключаем файл стилей css
import Post from './Post/Post';// Подключение компоненты Post

const MyPosts = (props) => {
    let postsItems = props.posts.map(post => <Post message={post.message} likesCount={p.likesCount} />);/*Создание объекта postsItems и передача данных поста из массива StateDate в компоненту Post*/
    let newPostElement = React.createRef();//Создание ссылки для передачи нового поста в масиве StateDate
    let addPost = ()=>{
        let text = newPostElement.current.value;
        props.addPost(text);
    }
    return <div className={p.main}>
        <div className={p.content}>
            <textarea ref = {newPostElement}></textarea>{/*Поле ввода нового поста */}
                <button onClick={addPost}>Добавить</button>{/*Кнопка добавления поста */}
        </div>
        <div className={p.posts}>
            {postsItems}{/*Вызов объекта  postsItems*/}
        </div>
    </div>
}
export default MyPosts;//Экспорт компоненты