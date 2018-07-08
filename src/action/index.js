import firebase from 'firebase';
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    USER_LOGIN_FAIL, 
    USER_LOGIN_SUCCESS, 
    USER_LOGIN_LOADING 
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const userLogin = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: USER_LOGIN_LOADING });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => userLoginSuccess(dispatch, user)) 
            .catch(() => userLoginFail(dispatch));
    };
};

const userLoginSuccess = (dispatch, user) => {
    dispatch({ type: USER_LOGIN_SUCCESS, payload: user });
};

const userLoginFail = (dispatch) => {
    // firebase.auth().createUserWithEmailAndPassword(email, password)
    //     .then(this.onLoginSuccess.bind(this)) 
    //     .catch(this.onLoginFaild.bind(this));
    dispatch({ type: USER_LOGIN_FAIL });
};

