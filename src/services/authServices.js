import apiKey from '../config/apiKey.js';
import axiosTheMovieDb from '../config/axios.js';

const API_KEY_ALT = '?' + apiKey;

const CREATE_REQUEST_TOKEN = 'authentication/token/new';
const VALIDATE_REQUEST_TOKEN = 'authentication/token/validate_with_login';
const REFRESH_REQUEST_TOKEN = 'authentication/token/refresh';

export async function authenticationUser() {
    try {
        const response = await axiosTheMovieDb.get('authentication' + API_KEY_ALT);
        console.log('authenticationUser',response.data)
        return response.data;
    }
    catch (e) {
        console.error('Oops unexpected', e);
        return [];
    }
}
export async function generationRequestToken() {
    try {
        const response = await axiosTheMovieDb.get(CREATE_REQUEST_TOKEN + API_KEY_ALT);
        console.log('authenticationUser',response.data)
        return response.data;
    }
    catch (e) {
        console.error('Oops unexpected', e);
        return [];
    }
}

export async function validateRequestToken() {
    try {
        const response = await axiosTheMovieDb.get(VALIDATE_REQUEST_TOKEN + API_KEY_ALT);
        console.log('authenticationUser',response.data)
        return response.data;
    }
    catch (e) {
        console.error('Oops unexpected', e);
        return [];
    }
}

export async function refreshRequestToken() {
    try {
        const response = await axiosTheMovieDb.get(REFRESH_REQUEST_TOKEN + API_KEY_ALT);
        console.log('authenticationUser',response.data)
        return response.data;
    }
    catch (e) {
        console.error('Oops unexpected', e);
        return [];
    }
}