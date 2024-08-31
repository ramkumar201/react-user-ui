import axios from './index';

export async function LoginService(data) {
    const res = axios().post('/login', data);
    return res;
}

export async function RegisterService(data) {
    const res = await axios().post('/register', data);
    return res;
}

export async function GetProfileUserService(id) {
    const res = await axios().get(`/getprofileinfo/${id}`);
    return res;
}

export async function ProfileUpdateService(data) {
    const res = await axios().post('/updateprofile', data);
    return res;
}

export async function AuthGoogleLogin(data) {
    const res = await axios().post("/auth/google", data);
    return res;
}