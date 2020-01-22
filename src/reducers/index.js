import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import streamReducer from './streamReducer';

// turns an object (whose values are different reducing functions) into a single reducing function you can pass to createStore.
export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
}); 