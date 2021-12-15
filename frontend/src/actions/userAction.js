import axios from "axios";
import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,

    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL,

    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAIL,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
} from "../constants/userConstants";


export const addNewUser = (email, group, password) => async (dispatch) => {
    try {
        dispatch({type: USER_REGISTER_REQUEST})

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        // we gonna take the email and password
        const {data} = await axios.post(  // we`re going to make post request
            `/api/users/add/`,
            {'email': email, 'groups': group, 'password': password},
            config
        )
        // if post request is successful, we want to dispatch and then send the payload to our reducers
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const listUsers = () => async (dispatch, getState) => {
    try {
        dispatch({type: USER_LIST_REQUEST})

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }
        // we get all users from ours DB
        const {data} = await axios.get(
            `/api/users/`,
            config
        )
        // if get request is successful, we want to dispatch and then send the payload to our reducers
        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const getUserDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: USER_DETAILS_REQUEST})

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }
        // we take user by id
        const {data} = await axios.get(
            `/api/users/${id}/`,
            config
        )
        // if get request is successful, we want to dispatch and then send the payload to our reducers
        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const deleteUser = (id) => async (dispatch) => {
    try {
        dispatch({type: USER_DELETE_REQUEST})

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }
        // we take user by id
        const {data} = await axios.delete(
            `/api/users/delete/${id}/`,
            config
        )
        // if get request is successful, we want to dispatch and then send the payload to our reducers
        dispatch({
            type: USER_DELETE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const updateUser = (user) => async (dispatch) => {
    try {
        dispatch({type: USER_UPDATE_REQUEST})

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }
        // we take user by id
        const {data} = await axios.put(
            `/api/users/${user._id}/edit/`,
            user,
            config
        )
        // if get request is successful, we want to dispatch and then send the payload to our reducers
        dispatch({
            type: USER_UPDATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}