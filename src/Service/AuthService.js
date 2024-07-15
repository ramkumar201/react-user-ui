import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

export async function LoginService(data) {
    await axios.get(API + '/login').then((res) => {
        console.log(res);
    })
}

export async function RegisterService(data) {
    console.log('register - ', data)
}