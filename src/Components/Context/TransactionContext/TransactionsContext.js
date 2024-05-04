import React, { createContext, useReducer } from 'react';
import axios from "axios";
import { CREATE_TRANSACTION_SUCCESS, CREATE_TRANSACTION_FAILURE } from './TransactionsActionTypes';
const transactionContext = createContext();

const INITIAL_STATE = {
  loading:false,
  transactions:[],
  transaction:null,
  error:null
}

const reducer = (state,action) => {
  switch(action.type){
    case CREATE_TRANSACTION_SUCCESS:
      return {
        ...state,
        transaction:action.payload
      }
    case CREATE_TRANSACTION_FAILURE:
      return {
        ...state,
        error:action.payload
      }
    default:
      return state
  }
};




const TransactionsContext = ({children}) => {
  const [state,dispatch] = useReducer(reducer,INITIAL_STATE);

  const createTransaction = async(accountID,formData) => {
    try{
      const token = window.localStorage.getItem("token");
      const response = await axios.post(`https://mern-expenses-tracker-app-backend.onrender.com/api/v1/transaction/createtransaction/${accountID}`,formData,{headers:{
      'Content-Type' : 'application/json',
      'Authorization':`Bearer ${token}`
      }});
      dispatch({type:CREATE_TRANSACTION_SUCCESS, payload:response.data});
      window.location.href = `/dashboard/account/${accountID}`
    }
    catch(err){
      dispatch({type:CREATE_TRANSACTION_FAILURE, payload:err.response.data});
    }
  }

  return (
    <transactionContext.Provider value={{
      state,
      createTransaction
    }}>
      {children}
    </transactionContext.Provider>
  )
}

export {
  transactionContext,
  TransactionsContext
}