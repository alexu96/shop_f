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
      "http://ed064a9589ef.ngrok.io/users",
      body,
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    console.log(res.data)
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => Alert.alert(error.msg));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};
