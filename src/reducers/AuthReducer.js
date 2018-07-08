import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    USER_LOGIN_FAIL, 
    USER_LOGIN_LOADING, 
    USER_LOGIN_SUCCESS 
} from './../action/types';

const INITIAL_STATE = { 
    email: '', 
    password: '', 
    loading: false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case USER_LOGIN_SUCCESS:
            return { 
                ...state, 
                user: action.payload, 
                email: '', 
                password: '', 
                error: '',
                loading: false 
            };
        case USER_LOGIN_FAIL:
            return { ...state, password: '', error: 'Authentication Error', loading: false };
        case USER_LOGIN_LOADING:
            return { ...state, loading: true };
        default:
            return state;
    }
};
