
export async function checkEmail(value) {
    let returnValue = false;
    if (!value) {
        returnValue = true;
    } else if (!/\S+@\S+\.\S+/.test(value)) {
        returnValue = true;
    }
    return returnValue;
}