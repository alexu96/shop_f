import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGIN_SUCCESS,LOGIN_FAIL  } from "../action/types";

const initialState = {
    isAuthentication: false,
    user: null
}

export default function(state= initialState, action) {

    const {type, payload} = action

    switch(type) {

        case LOGIN_SUCCESS:
            AsyncStorage.setItem("token", payload.token)
            return {
                ...state,
                ...payload,
                isAuthentication: true,
                user: payload.token
            }

        case LOGIN_FAIL:
            AsyncStorage.removeItem("token")
            return {
                ...state,
                ...payload,
                isAuthentication: false,
                user: null
            }


        default:
            return{
                ...state
            }

    }

}