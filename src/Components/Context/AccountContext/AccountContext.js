import {createContext, useReducer} from 'react';
import axios from "axios"; 
import { SINGLE_ACCOUNT_FAILURE, SINGLE_ACCOUNT_SUCCESS,
CREATE_ACCOUNT_SUCCESS, CREATE_ACCOUNT_FAILURE } from './AccountActionType';

const accountContext = createContext();

const INITIAL_STATE = {
    account:null,
    accounts:[],
    loading:false,
    error:null
};

const reducer = (state,action) => {
    switch(action?.type){
        case SINGLE_ACCOUNT_SUCCESS:
            return {
                ...state,
                account:action.payload?.Account
            }
        case SINGLE_ACCOUNT_FAILURE:
        case CREATE_ACCOUNT_FAILURE:
            return {
                ...state,
                error:action.payload
            }
        case CREATE_ACCOUNT_SUCCESS:
            return {
                ...state,
                createdAccount:action.payload
            }
        default:
            return state
    }
}



const AccountContext = ({children}) => {
    const [state,dispatch] = useReducer(reducer, INITIAL_STATE);

    const fetchSingleAccount = async(accountID) => {
        try{
            const token = localStorage.getItem("token");
            const response = await axios.get(`http://127.0.0.1:5000/api/v1/account/singleaccount/${accountID}`,{headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
            }});
            dispatch({type:SINGLE_ACCOUNT_SUCCESS,payload:response.data});
        }
        catch(err){
            dispatch({type:SINGLE_ACCOUNT_FAILURE, payload:err.response.data});
        }
    }; 

    const createSingleAccount = async(formData) => {
        try{
            const token = localStorage.getItem("token");
            const response = await axios.post(`http://127.0.0.1:5000/api/v1/account/createaccount`,formData,{headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
            }});
            dispatch({type:CREATE_ACCOUNT_SUCCESS,payload:response.data});
            window.location.href = '/dashboard'
        }
        catch(err){
            dispatch({type:CREATE_ACCOUNT_FAILURE, payload:err.response.data});
        }
    }; 

    return <accountContext.Provider value={{
        state,
        fetchSingleAccount,
        createSingleAccount
    }}>
        {children}
    </accountContext.Provider>
}


export {
    accountContext,
    AccountContext
}