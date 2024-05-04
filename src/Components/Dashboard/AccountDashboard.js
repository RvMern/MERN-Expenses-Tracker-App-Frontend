import React, { useContext, useEffect } from 'react'
import AccountSummary from './AccountSummary'
import AccountList from './AccountList'
import {authContext} from "../Context/AuthContext/AuthContext";

const AccountDashboard = () => {
  const {state, userProfileAction} = useContext(authContext);
  useEffect(()=>{
    userProfileAction()
  },[]);
  return (
    <>
    {state.error !== null ?  <div className='bg-red-100 border text-center border-red-400 text-red-700 py-3 rounded relative'
    role='alert'>
    <strong className='font-bold'>Error!</strong>
    <span className='block md:inline'>{state.error.message}</span>
    </div> :
    <>
    <AccountSummary/>
    <AccountList user={state?.profile?.details}/>
    </>
    }

    </>
    
  )
}

export default AccountDashboard