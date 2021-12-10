import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_RESET,

    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_RESET,

    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_RESET,

    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAIL,
    USER_UPDATE_RESET,
} from "../constants/userConstants";


// this function create to register our users
export const userRegisterReducer = (state={}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {loading:true}

        case USER_REGISTER_SUCCESS:
            return {loading:false, success: true}

        case USER_REGISTER_FAIL:
            return {loading:false, error: action.payload}

        case USER_REGISTER_RESET:
            return {success: false}

        default:
            return state
    }
}


// we throw in the user object
export const userListReducer = (state={users:[]}, action) => {
    switch (action.type) {
        case USER_LIST_REQUEST:
            return {loading:true}

        case USER_LIST_SUCCESS:
            return {loading:false, users: action.payload}

        case USER_LIST_FAIL:
            return {loading:false, error: action.payload}
        // reset part of the state and make sure that`s clean
        case USER_LIST_RESET:
            return {users: []}

        default:
            return state
    }
}

// we throw in the user object
export const userDetailsReducer = (state={user: {}}, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return {...state, loading:true}

        case USER_DETAILS_SUCCESS:
            return {loading:false, user: action.payload}

        case USER_DETAILS_FAIL:
            return {loading:false,error: action.payload}

        case USER_DETAILS_RESET:
            return {user: {}}

        default:
            return state
    }
}

export const userDeleteReducer = (state={}, action) => {
    switch (action.type) {
        case USER_DELETE_REQUEST:
            return {loading:true}

        case USER_DELETE_SUCCESS:
            return {loading:false, success: true}

        case USER_DELETE_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state
    }
}

// we throw in the user object
export const userUpdateReducer = (state={}, action) => {
    switch (action.type) {
        case USER_UPDATE_REQUEST:
            return {loading:true}

        case USER_UPDATE_SUCCESS:
            return {loading:false, success: true}

        case USER_UPDATE_FAIL:
            return {loading:false,error: action.payload}
        // reset part of the state and make sure that`s clean
        case USER_UPDATE_RESET:
            return {}

        default:
            return state
    }
}