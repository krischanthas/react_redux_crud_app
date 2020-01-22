import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, DELETE_STREAM, EDIT_STREAM } from './types';
import streams from '../api/streams';
import history from '../history';

export const signIn = (id) => {
    return {
        type: SIGN_IN,
        payload: id
    };
};

export const signOut = (id) => {
    return {
        type: SIGN_OUT,
        payload: id
    };
};
// create a stream
export const createStream = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post('/streams', { ...formValues, userId });
    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    });
    // navigate user back to list of streams
    history.push('/');
};
// fetch a single stream
export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({
        type: FETCH_STREAM,
        payload: response.data
    });
};
// fetch ALL streams
export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    });
};
// update stream
export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);
    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    });
    history.push('/');
};
// delete stream
export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({
        type: DELETE_STREAM,
        payload: id
    });

    history.push('/')
};
