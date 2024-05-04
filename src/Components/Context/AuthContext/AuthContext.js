import React, { createContext, useReducer } from 'react'
import axios from "axios";
import {REGISTER_SUCCESS, REGISTER_FAILED, AUTHENTICATED_USER,NOT_AUTHENTICATED,NO_TOKEN,
USER_PROFILE_SUCCESS,USER_PROFILE_FAILED,
LOGOUT_SUCCESS,LOGOUT_FAILED} from "./AuthActionType";
const authContext = createContext();

const INITIAL_STATE = localStorage.getItem("token") ? {
  userAuth: localStorage.getItem("token"),
  error:null,
  loading:false,
  profile:null
} :
{
  userAuth:null,
  error:null,
  loading:false,
  profile:null
}

const reducer = (state,action) => {
  switch(action.type){
    case REGISTER_SUCCESS:
      return {
        ...state,
        user:action.payload
      }
    case REGISTER_FAILED:
      return {
        ...state,
        error:action.payload
      }
    case AUTHENTICATED_USER:
      window.localStorage.setItem("token",action.payload.generatedToken);
      return {
        ...state,
        userAuth : action.payload.generatedToken,
        error:null,
        loading:false,
      }
    case NOT_AUTHENTICATED:
      return {
        ...state,
        error: action.payload,
        loading:false,
      }
    case NO_TOKEN:
      return state;
    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        profile:action.payload
      }
    case USER_PROFILE_FAILED:
      return {
        ...state,
        error:action.payload
      }
    case LOGOUT_SUCCESS:
      return state;
    case LOGOUT_FAILED:
      return {
        ...state,
        error:action.payload
      }
    default:
      return state;
  }
}

const AuthContext = ({children}) => {
  const [state,dispatch] = useReducer(reducer,INITIAL_STATE);

  const registerUserAction = async(formData) => {
    try{
      const response = await axios.post('https://mern-expenses-tracker-app-backend.onrender.com/api/v1/user/register',formData,{
        headers:{
          'Content-Type' : 'multipart/form-data'
        }
      });
      dispatch({type:REGISTER_SUCCESS,payload:response.data});
      window.location.href = "/login";
    }
    catch(err){
      dispatch({type:REGISTER_FAILED,payload:err.response.data});
    }
  };

  const loginUserAction = async(formData) => {
    try{
      const response = await axios.post('https://mern-expenses-tracker-app-backend.onrender.com/api/v1/user/login',formData,{headers:{
        'Content-Type':'application/json'
      }});
      dispatch({type:AUTHENTICATED_USER,payload:response.data});
    }
    catch(err){
      dispatch({type:NOT_AUTHENTICATED,payload:err.response.data});
    }
  };

  const userProfileAction = async() => {
    try{
      const token = state.userAuth;
      if(token === null){
        return dispatch(NO_TOKEN);
      }
      const response = await axios.get('https://mern-expenses-tracker-app-backend.onrender.com/api/v1/user/userprofile',{headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }});
      dispatch({type:USER_PROFILE_SUCCESS,payload:response.data});
    }
    catch(err){
      dispatch({type:USER_PROFILE_FAILED,payload:err.response.data});
    }
  };

  const logoutUserAction = async() => {
    try{
      window.localStorage.removeItem("token");
      dispatch({type:LOGOUT_SUCCESS});
      window.location.href = "/login";
    }
    catch(err){
      dispatch({type:LOGOUT_FAILED,payload:err.message});
    }
  };

  return (
    <authContext.Provider value={{
      state,
      registerUserAction,
      loginUserAction,
      userProfileAction,
      logoutUserAction
    }}>
      {children}
    </authContext.Provider>
  )
}

export {
  authContext,
  AuthContext
}