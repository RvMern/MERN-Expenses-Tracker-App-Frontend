import React, { useContext, useEffect } from 'react'
import {Link, useParams} from "react-router-dom";
import AllTransactions from './AllTransactions';
import {accountContext} from "../../Components/Context/AccountContext/AccountContext";

const AccountDetails = () => {
    const accountID = useParams().id;
    const {state, fetchSingleAccount} = useContext(accountContext);
    useEffect(()=>{
        fetchSingleAccount(accountID);
    },[]);

    const totalExpenses = state?.account?.transactions?.reduce((acc,transaction)=>{
        if(transaction?.transactionType === 'Expenses'){
            return acc + transaction?.amount;
        }
        else{
            return acc;
        }
    },0);

    const totalIncome = state?.account?.transactions?.reduce((acc,transaction)=>{
        if(transaction?.transactionType === 'Income'){
            return acc + transaction?.amount;
        }
        else{
            return acc;
        }
    },0);

    useEffect(()=>{
        const initialBalance = document.getElementById('initialBalance');
        const totalBalance = document.getElementById('totalBalance');
        if(state?.account?.initialBalance === 0){
            initialBalance.style.color = 'rgba(0,0,0,.5)'
        }
        else if(state?.account?.initialBalance < 0){
            initialBalance.style.color = 'rgba(255,0,0,.5)'
        }
        else{
            initialBalance.style.color = 'rgba(0,255,0,.5)'
        }

        if((state?.account?.initialBalance + totalExpenses + totalIncome) === 0){
            totalBalance.style.color = 'rgba(0,0,0,.5)'
        }
        else if((state?.account?.initialBalance + totalExpenses + totalIncome) < 0){
            totalBalance.style.color = 'rgba(255,0,0,.5)'
        }
        else{
            totalBalance.style.color = 'rgba(0,255,0,.5)'
        }
        
    },[state])

  return (
    <>
    <div className='p-6 bg-slate-200'>
        <h1 className='p-4 my-2 font-bold text-3xl text-center'>{state?.account?.accountName}</h1>
        <p className='p-4 my-4 font-medium text-center'>{
            state?.account?.notes
        }</p>
        <div className='p-6 flex flex-col items-center justify-center
        lg:flex-row lg:justify-around'>
            <div className='bg-white w-full my-5 shadow-xl rounded-lg lg:mx-8'>
                <h3 className='p-4 bg-violet-400 font-medium text-lg text-center'>Total Balance</h3>
                <p id='totalBalance' className='font-medium p-9 text-3xl text-center'>$ {state?.account?.initialBalance + totalIncome + totalExpenses}</p>
            </div>

            <div className='bg-white w-full my-5 shadow-xl rounded-lg lg:mx-8'>
                <h3 className='p-4 bg-slate-400 font-medium text-lg text-center'>Initial Balance</h3>
                <p id='initialBalance' className='font-medium p-9 text-3xl text-center'>$ {state?.account?.initialBalance}</p>
            </div>

            <div className='bg-white w-full my-5 shadow-xl rounded-lg lg:mx-8'>
                <h3 className='p-4 bg-red-500 font-medium text-lg text-center'>Total Expenses</h3>
                <p className='font-medium p-4 text-2xl text-center text-red-500'>$ {totalExpenses}</p>
                <Link className='block w-40 text-center font-medium p-1 my-3 mx-auto bg-red-300 rounded-3xl hover:bg-violet-400 hover:text-white hover:shadow-xl hover:transform hover:-translate-y-1 transition-all' to='/transaction'>View History</Link>
            </div>

            <div className='bg-white w-full my-5 shadow-xl rounded-lg lg:mx-8'>
                <h3 className='p-4 bg-green-500 font-medium text-lg text-center'>Total Income</h3>
                <p className='font-medium p-4 text-2xl text-center text-green-500'>$ {totalIncome}</p>
                <Link className='block w-40 text-center bg-green-300 font-medium p-1 my-3 mx-auto rounded-3xl hover:bg-violet-400 hover:text-white hover:shadow-xl hover:transform hover:-translate-y-1 transition-all' to='/transaction'>View History</Link>
            </div>
        </div>
    </div>

    <AllTransactions allTransactions={state?.account?.transactions}/>
    </>
  )
}

export default AccountDetails