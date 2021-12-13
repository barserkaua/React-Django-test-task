import {
    GROUP_LIST_REQUEST,
    GROUP_LIST_SUCCESS,
    GROUP_LIST_FAIL,
    GROUP_LIST_RESET,

    GROUP_ADD_NEW_REQUEST,
    GROUP_ADD_NEW_SUCCESS,
    GROUP_ADD_NEW_FAIL,
    GROUP_ADD_NEW_RESET,

    GROUP_DELETE_REQUEST,
    GROUP_DELETE_SUCCESS,
    GROUP_DELETE_FAIL,

    GROUP_DETAILS_REQUEST,
    GROUP_DETAILS_SUCCESS,
    GROUP_DETAILS_FAIL,
    GROUP_DETAILS_RESET,

    GROUP_UPDATE_REQUEST,
    GROUP_UPDATE_SUCCESS,
    GROUP_UPDATE_FAIL,
    GROUP_UPDATE_RESET,
} from "../constants/groupConstants";

// we throw in the group object
export const groupListReducer = (state={groups:[]}, action) => {
    switch (action.type) {
        case GROUP_LIST_REQUEST:
            return {loading:true}

        case GROUP_LIST_SUCCESS:
            return {loading:false, groups: action.payload}

        case GROUP_LIST_FAIL:
            return {loading:false, error: action.payload}
        // reset part of the state and make sure that`s clean
        case GROUP_LIST_RESET:
            return {groups: []}

        default:
            return state
    }
}


// this function create to register our users
export const groupAddNewReducer = (state={}, action) => {
    switch (action.type) {
        case GROUP_ADD_NEW_REQUEST:
            return {loading:true}

        case GROUP_ADD_NEW_SUCCESS:
            return {loading:false, success: true}

        case GROUP_ADD_NEW_FAIL:
            return {loading:false, error: action.payload}

        case GROUP_ADD_NEW_RESET:
            return {success: false}

        default:
            return state
    }
}

// we throw in the group object
export const groupDetailsReducer = (state={group: {}}, action) => {
    switch (action.type) {
        case GROUP_DETAILS_REQUEST:
            return {...state, loading:true}

        case GROUP_DETAILS_SUCCESS:
            return {loading:false, group: action.payload}

        case GROUP_DETAILS_FAIL:
            return {loading:false, error: action.payload}

        case GROUP_DETAILS_RESET:
            return {group: {}}

        default:
            return state
    }
}


export const groupDeleteReducer = (state={}, action) => {
    switch (action.type) {
        case GROUP_DELETE_REQUEST:
            return {loading:true}

        case GROUP_DELETE_SUCCESS:
            return {loading:false, success: true}

        case GROUP_DELETE_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state
    }
}

export const groupUpdateReducer = (state={}, action) => {
    switch (action.type) {
        case GROUP_UPDATE_REQUEST:
            return {loading:true}

        case GROUP_UPDATE_SUCCESS:
            return {loading:false, success: true}

        case GROUP_UPDATE_FAIL:
            return {loading:false, error: action.payload}
        // reset part of the state and make sure that`s clean
        case GROUP_UPDATE_RESET:
            return {}

        default:
            return state
    }
}