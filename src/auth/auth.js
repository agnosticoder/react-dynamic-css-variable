import users from '../database/users.json';

const auth = (username, password) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username !== 'agnosticoder') {
                reject('username-incorrect');
            } else if (password !== 'password') {
                reject('password-incorrect');
            } else {
                resolve(JSON.stringify(users, null, 2));
            }
        }, 1000)
    })
}

export default auth;