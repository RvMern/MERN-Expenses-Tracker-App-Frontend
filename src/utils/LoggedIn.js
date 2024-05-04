import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom";

const LoggedIn = ({children:Children}) => {
    const navigate = useNavigate();
    useEffect(()=>{
        const token = window.localStorage.getItem("token");
        if(!token){
            navigate('/login');
        }
    },[]);
    return (<Children/>)
}

export default LoggedIn