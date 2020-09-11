import Link from "next/link";
import {useDispatch} from "react-redux";
import {logOut} from "../redux/authReducer";
import Router from "next/router";


export default  () =>{
    const dispatch = useDispatch()


    let Logout = ()=>{
       dispatch(logOut());
        Router.push('/login');
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href="#"><a onClick={Logout} className="navbar-brand">Logout</a></Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link href="/setting"><a>Setting name</a></Link>
                </div>
            </div>
        </nav>
    )
}
