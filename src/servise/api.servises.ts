import axios from "axios";

let instance = axios.create({
     baseURL: 'https://dummyjson.com',
    headers:{"Content-Type":"application/json"}
    });
const getAllUsers =async () => {
    return await instance.get('/users').then((response)=>response.data);

}

// const getAllPosts = async (id:number) => {
//     const { data } = await instance.get('/users/'+id+'/posts')
//     return data
export {getAllUsers}

// Виконуємо класовими компонентами
// https://dummyjson.com/docs/users
//     отримати та вивести інфу по всіх юзерах. Для запитів використовуємо axios та розносимо логіку в сервіси
// Структура компонентів : App - Users- User
// в компоненті User зробити кнопку при натсиканні на яку відбувається стейт ліфтінг ід користувача в батьківську компоненту. В батьківській компоненті вивести всі пости обраного юзера (https://dummyjson.com/docs/posts  Get all posts by user id)