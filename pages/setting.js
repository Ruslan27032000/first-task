import {RootLayout} from "../layouts/RootLayout";
import {useDispatch, useSelector} from "react-redux";
import Router from "next/router";
import {useEffect, useState} from "react";
import {rename} from "../redux/authReducer";


export default () => {
    const dispatch = useDispatch()
    const login = useSelector(state => state.auth.auth)
    const [name,setName] = useState('');
    useEffect(()=>{
        if (!login) {
            Router.push('/login')
        }
    },[])

    let onSubmitName = (e)=>{
        e.preventDefault();
        dispatch(rename(name))
        Router.push('/');
    }

    let onChangeName = (e)=>{
        setName(e.target.value);
    }

    return (
        <RootLayout>
            <div className="container mt-5 w-25 ">
                <form onSubmit={onSubmitName}>
                    <input className="form-control" placeholder="Enter new name" value={name} onChange={onChangeName}
                           autoFocus/>
                    <button className="btn btn-lg btn-primary btn-block mt-4" type="submit">Sign in</button>
                </form>
            </div>

        </RootLayout>
    )
}