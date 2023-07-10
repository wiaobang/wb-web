import React from "react";
import {Navigate} from "react-router-dom";

const AuthRoter = ({children})=>
{
    const token = localStorage.getItem('Authorization')
    if (!token){
        return <Navigate to='/login'/>
    }
    return <div>{children}</div>
}

export default AuthRoter;