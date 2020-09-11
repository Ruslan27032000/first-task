import 'bootstrap/dist/css/bootstrap.min.css';
import {RootLayout} from "../layouts/RootLayout";
import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logIn} from "../redux/authReducer";
import Router from "next/router";
import {Alert} from "./Alert";

export default ()=>{
    const dispatch = useDispatch()
    const [login,setLogin] = useState('');
    const [password,setPassword] = useState('');
    const[error,setError] = useState('')
    const getLogin = useSelector(state=>state.auth.login);
    const getPassword = useSelector(state=>state.auth.password)

    const updateLogin = e =>{
        setLogin(e.target.value)
    }

    const updatePassword = e =>{
        setPassword(e.target.value);
    }


    const Login = e =>{
        e.preventDefault()
        if(login == getLogin && password == getPassword){
            dispatch(logIn())
            Router.push('/')
        }
        else{
            setError("Invalid data. Please, try again");
        }
    }

    return (

        <RootLayout>
            <div className="container mt-5 w-25 ">
                {error && <Alert text={error}/>}
                <form className="form-signin" onSubmit={Login}>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Login</label>
                    <input className="form-control" placeholder="Login" value={login} required onChange={updateLogin}
                           autoFocus/>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" className="form-control mt-2" value={password} required onChange={updatePassword}
                           placeholder="Password" required/>
                    <button className="btn btn-lg btn-primary btn-block mt-4" type="submit">Sign in</button>
                </form>
            </div>
        </RootLayout>
    )
}