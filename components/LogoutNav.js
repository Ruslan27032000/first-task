import Link from "next/link";


export default  () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href="/login"><a className="navbar-brand">Login</a></Link>
        </nav>
    )
}
