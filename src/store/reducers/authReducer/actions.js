import {jwtDecode} from "jwt-decode";
import axios from "axios";

export const login = (values) => async (dispatch) => {
    const url = process.env.REACT_APP_API_BASE_URL + "account/login";
    const response = await axios.post(url, {login: values.email, password: values.password});
    if(response.status !== 200) {
        return dispatch({type: "ERROR"});
    }

    const data = response.data;
    const jwtToken = data.payload;

    return dispatch(loginByToken(jwtToken));
}

export const loginByToken = (token) => async (dispatch) => {
    localStorage.setItem("aut", token);
    const user = jwtDecode(token);
    delete user.iss;
    delete user.aud;
    delete user.exp;

    return dispatch({type: "USER_LOGIN", payload: user});
}

export const register = (values) => async (dispatch) => {
    const url = process.env.REACT_APP_API_BASE_URL + "account/register";
    const response = await axios.post(url, values);
    if(response.status !== 200) {
        return dispatch({type: "ERROR"});
    }

    const data = response.data;
    const jwtToken = data.payload;

    return dispatch(loginByToken(jwtToken));
}

export const logout = () => {
    localStorage.removeItem("aut");
    return {type: "USER_LOGOUT"};
}

export const googleLogin = (jwtToken) => {
    const payload = jwtDecode(jwtToken);

    const user = {
        email: payload.email,
        firstName: payload.given_name,
        lastName: payload.family_name,
        image: payload.picture,
        role: "user"
    };

    localStorage.setItem("user", JSON.stringify(user));
    return {type: "GOOGLE_LOGIN", payload: user};
}