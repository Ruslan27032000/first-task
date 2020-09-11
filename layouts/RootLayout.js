import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import {useSelector} from "react-redux";
import LoginNav from "../components/LoginNav";
import LogoutNav from "../components/LogoutNav";

export function RootLayout({children}) {

    const login = useSelector(state=>state.auth.auth)

    return (
        <>
            {login ? <LoginNav/> : <LogoutNav/>}

            <main>
                {children}
            </main>
        </>
    )
}