import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import {
    userRegisterReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer,
    userDetailsReducer,
} from "./reducers/userReducer";

import {
    groupListReducer,
    groupAddNewReducer,
    groupDeleteReducer,
    groupDetailsReducer,
    groupUpdateReducer,
} from "./reducers/groupReducers";


const reducer = combineReducers({
    // here, we just register our reducers
    userRegister: userRegisterReducer,
    userList: userListReducer,
    userDetails: userDetailsReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,

    groupList: groupListReducer,
    groupAddNew: groupAddNewReducer,
    groupDelete: groupDeleteReducer,
    groupDetails: groupDetailsReducer,
    groupUpdate: groupUpdateReducer,
})


const initialState = {

}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;
