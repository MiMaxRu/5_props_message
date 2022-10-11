import MyPosts from './MyPosts/MyPosts';//Подключение компонеты MyPosts
import p from './Profile.module.css'//Подключение файла стилей css

const Profile = (props) => {
    return (
        <div className={p.content}>
            <h3>Новый пост</h3>
            <MyPosts posts={props.state.posts} addPost={props.addPost} />{/*Передача данных поста из массива StateDate */}
        </div>
    )
}
export default Profile;//Экспорт компоненты

