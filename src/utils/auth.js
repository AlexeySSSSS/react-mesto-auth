import { responseAnalysis } from './response';

export const BASE_URL = 'https://auth.nomoreparties.co';

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

export const userRegister = ({ email, password }) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ email, password }),
    }).then((res) => responseAnalysis(res));
};

export const loginAuthorize = ({ email, password }) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ email, password }),
    }).then((res) => responseAnalysis(res));
};

export const getToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            ...headers,
            Authorization: `Bearer ${token}`,
        },
    }).then((res) => responseAnalysis(res));
};