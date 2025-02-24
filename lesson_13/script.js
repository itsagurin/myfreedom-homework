// task 1
// Напишите асинхронную функцию, которая получает список пользователей с сервера jsonplaceholder.
// Выведите список пользователей на страницу.
//
// В задании используйте синтаксис async-await и предусмотрите обработку ошибок.

const getUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        const ul = document.createElement('ul');
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            ul.appendChild(li);
        });
        document.body.appendChild(ul);
    } catch (error) {
        console.error(error);
    }
}

getUsers();

// task 2
// По адресу `https://api.github.com/users/${userName}` можно получить информацию о пользователе github.
//
// 1.Запросите информацию о себе и оформите страничку с данными:
//
// - аватар
//
// - имя пользователя
//
// - ссылка на страницу на github
//
// - дата регистрации на github
//
// - количество репозиториев.
//
// 2. Измените приложение так, чтобы имя пользователя можно было вводить в поле и после нажатия на кнопку отрисовывалась
// информация о нем.

async function fetchUserInfo() {
    const userName = "itsagurin";
    try {
        const response = await fetch(`https://api.github.com/users/${userName}`);

        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }

        const user = await response.json();
        displayUserInfo(user);
    } catch (error) {
        console.error("Ошибка при получении информации о пользователе:", error);
        document.getElementById("userInfo").textContent = "Не удалось загрузить информацию о пользователе.";
    }
}

function displayUserInfo(user) {
    const registeredDate = new Date(user.created_at).toLocaleDateString();
    const userInfoHTML = `
    <img src="${user.avatar_url}" alt="Avatar пользователя ${user.login}" width="150">
    <h2>${user.name ? user.name : user.login}</h2>
    <p><a href="${user.html_url}" target="_blank">Перейти на GitHub профиль</a></p>
    <p>Дата регистрации: ${registeredDate}</p>
    <p>Количество репозиториев: ${user.public_repos}</p>
  `;

    document.getElementById("userInfo").innerHTML = userInfoHTML;
}

document.addEventListener("DOMContentLoaded", fetchUserInfo);
