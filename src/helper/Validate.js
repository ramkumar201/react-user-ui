import toast from "react-hot-toast";

export async function emailValidate(values) {
    let error = {};
    if (!values.email) {
        error.email = toast.error("Email Required...!")
    } else if (values.email.includes(" ") || (!/\S+@\S+\.\S+/.test(values.email))) {
        error.email = toast.error("Invalid Email...!")
    }
    return error;
}

export async function checkEmail(value) {
    let returnValue = false;
    if (!value) {
        returnValue = true;
    } else if (!/\S+@\S+\.\S+/.test(value)) {
        returnValue = true;
    }
    return returnValue;
}