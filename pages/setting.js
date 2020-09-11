import {RootLayout} from "../layouts/RootLayout";
import {useSelector} from "react-redux";
import Router from "next/router";
import {useEffect} from "react";


export default () => {
    const login = useSelector(state => state.auth.auth)
    const name = useSelector(state=>state.auth.name)
    useEffect(()=>{
        if (!login) {
            Router.push('/login')
        }
    },[])

    return (
        <RootLayout>
            <h1>Hello, {name}</h1>
        </RootLayout>
    )
}