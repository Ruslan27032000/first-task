import 'bootstrap/dist/css/bootstrap.min.css';
import {RootLayout} from "../layouts/RootLayout";
import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logIn} from "../redux/authReducer";
import Login from "../components/Login";

export default ()=>{
    const auth = useSelector(state=>state.auth.auth);
    if(!auth){
        return <Login/>
    }
    return(
       <h1>You are log in</h1>
    )
}