import React from 'react';//Подключение библиотеки React
import ReactDOM from 'react-dom/client';//Подключаем библиотеку для рендеринга элементов
import App from './App';//Подключаем компоненту App.js

import { addPost } from './stateDate';//Подключаем функцию добавления поста


export let renderEntireTree = (stateData) => {//Экспорт стрелочной фенкции рендера дерева страницы
  const root = ReactDOM.createRoot(document.getElementById('root'));//Для рендеринга элементов в React вначале необходимо определить корневой элемент, в который будет производиться рендеринг. Для этого применяется метод ReactDOM.createRoot().
  root.render(
    <React.StrictMode>
      <App stateData={stateData} addPost={addPost} />{/*Передача данных массива и подключение функции добавления поста addPost */}
    </React.StrictMode>
  );
}
