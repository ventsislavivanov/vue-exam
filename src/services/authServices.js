import apiKey from '../config/apiKey.js';
import axiosTheMovieDb from '../config/axios.js';
import axios from "axios";

const API_KEY_ALT = '?' + apiKey;

const CREATE_REQUEST_TOKEN = 'authentication/token/new';
const CREATE_SESSION = 'authentication/session/new';

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
        return response.data;
    }
    catch (e) {
        console.error('Oops unexpected', e);
        return [];
    }
}

export async function createSession(requestToken) {
    try {
        const response = await axios.get(CREATE_SESSION + API_KEY_ALT + `&request_token=${requestToken}`);
        console.log('createSession', response);
        return response.data;
    }
    catch (e) {
        console.error('Oops unexpected', e);
        return [];
    }
}

export async function deleteSession(sessionId) {
    const url = `https://api.themoviedb.org/3/authentication/session?${API_KEY_ALT}`;
    try {
        const response = await axios.delete(url, {
            data: { session_id: sessionId },
        });

        if (response.data.success) {
            console.log("Session deleted successfully.");
        } else {
            console.error("Failed to delete session:", response.data);
        }

        return response.data;
    }
     catch (e) {
        console.error('Oops unexpected', e);
        return [];
    }
}
