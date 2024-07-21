import axios from './index';
const API = process.env.REACT_APP_API_URL;

export async function LoginService(data) {
    const res = axios().post(API + '/login', data);
    return res;
}

export async function RegisterService(data) {
    const res = await axios().post(API + '/register', data);
    return res;
}