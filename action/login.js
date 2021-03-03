import { LOGIN_SUCCESS, LOGIN_FAIL } from "./types";
import { Alert } from 'react-native'
import axios from "axios";


export const Login = ({ email, password }) => async dispatch => {
  const config = {
    headers: {
      "content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      "http://2886efe0e676.ngrok.io/auth",
      body,
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
   
  } catch (err) {
   console.log(err)

    dispatch({
      type: LOGIN_FAIL
    });
  }
};
