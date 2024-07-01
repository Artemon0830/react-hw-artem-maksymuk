import React, {FC} from 'react';
import './App.css';
import {UsersComponents} from "./components/Users-components";

const App:FC = () => {
  return(
      <div className="App">
          <UsersComponents/>


      </div>
  );
}

export default App;
// https://dummyjson.com/docs/users
//     отримати та вивести інфу по всіх юзерах. Для запитів використовуємо axios та розносимо логіку в сервіси
// Структура компонентів : App - Users- User
// в компоненті User зробити кнопку при натсиканні на яку відбувається стейт ліфтінг ід користувача в батьківську компоненту. В батьківській компоненті вивести всі пости обраного юзера (https://dummyjson.com/docs/posts  Get all posts by user id)