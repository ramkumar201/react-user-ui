import axios from './index';

export async function GetStorageType () {
    const res = await axios().get(`/getstoragetype`);
    return res;
}