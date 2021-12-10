import axios from "axios";

import {
    GROUP_LIST_REQUEST,
    GROUP_LIST_SUCCESS,
    GROUP_LIST_FAIL,

    GROUP_ADD_NEW_REQUEST,
    GROUP_ADD_NEW_SUCCESS,
    GROUP_ADD_NEW_FAIL,

    GROUP_DELETE_REQUEST,
    GROUP_DELETE_SUCCESS,
    GROUP_DELETE_FAIL,

    GROUP_DETAILS_REQUEST,
    GROUP_DETAILS_SUCCESS,
    GROUP_DETAILS_FAIL,

    GROUP_UPDATE_REQUEST,
    GROUP_UPDATE_SUCCESS,
    GROUP_UPDATE_FAIL,
} from "../constants/groupConstants";


export const listGroups = () => async (dispatch) => {
    try {
        dispatch({type: GROUP_LIST_REQUEST})

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }
        // we get all groups from ours DB
        const {data} = await axios.get(
            `/api/groups/`,
            config
        )
        // if get request is successful, we want to dispatch and then send the payload to our reducers
        dispatch({
            type: GROUP_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GROUP_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const addNewGroup = (name, description) => async (dispatch) => {
    try {
        dispatch({type: GROUP_ADD_NEW_REQUEST})

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        // we gonna take the email and password
        const {data} = await axios.post(  // we`re going to make post request
            `/api/groups/add/`,
            {'name': name, 'description': description},
            config
        )
        // if post request is successful, we want to dispatch and then send the payload to our reducers
        dispatch({
            type: GROUP_ADD_NEW_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GROUP_ADD_NEW_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const getGroupDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: GROUP_DETAILS_REQUEST})

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }
        // we take group by id
        const {data} = await axios.get(
            `/api/groups/${id}/`,
            config
        )
        // if get request is successful, we want to dispatch and then send the payload to our reducers
        dispatch({
            type: GROUP_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GROUP_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const deleteGroup = (id) => async (dispatch) => {
    try {
        dispatch({type: GROUP_DELETE_REQUEST})

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }
        // we take user by id
        const {data} = await axios.delete(
            `/api/groups/delete/${id}/`,
            config
        )
        // if get request is successful, we want to dispatch and then send the payload to our reducers
        dispatch({
            type: GROUP_DELETE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GROUP_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const updateGroup = (group) => async (dispatch) => {
    try {
        dispatch({type: GROUP_UPDATE_REQUEST})

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }
        // we take group by id
        const {data} = await axios.put(
            `/api/groups/${group.id}/edit/`,
            group,
            config
        )
        // if get request is successful, we want to dispatch and then send the payload to our reducers
        dispatch({
            type: GROUP_UPDATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GROUP_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}