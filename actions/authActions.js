import {
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from './types'

export const login = (userCredentials) => {
    if (
        userCredentials.username === 'testuser' &&
        userCredentials.password === '123456'
    ) {
        return {
            type: LOGIN_SUCCESS
        }
    } else {
        return {
            type: LOGIN_ERROR
        }
    }
}