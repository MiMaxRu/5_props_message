
import { renderEntireTree } from './render';//подключаем файл рендера страницы
let stateData = {//Масив содержащий данные постов
    profilePage: {
        posts: [
            { id: 1, message: 'Я Вова', likesCount: 32 },
            { id: 2, message: 'Я люблю гонаять на гелике', likesCount: 15 },
            { id: 3, message: 'А ещё люблю ездить на нём на рыбалку', likesCount: 22 }
        ]
    }
}

export let addPost = (postMessage) => {//Функция отправки данных в массив постов
    let newPost = {//Объявляем объект передаваемого поста
        id: stateData.profilePage.posts.length+1,//Расчитываем id поста и добавляем новый элемент в конец масива
        message: postMessage,//передаваемое сообщение
        likesCount: 0//колличество лайков
    }
    stateData.profilePage.posts.push(newPost);//Отправка данных в масив
    renderEntireTree(stateData);//Обновление страницы
}
export default stateData;//Экспорт масива stateData