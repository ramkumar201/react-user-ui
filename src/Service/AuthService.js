import axios from './index';

export async function LoginService(data) {
    const res = axios().post('/login', data);
    return res;
}

export async function RegisterService(data) {
    const res = await axios().post('/register', data);
    return res;
}