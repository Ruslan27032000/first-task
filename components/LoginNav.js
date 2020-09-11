import Link from "next/link";


export default  () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href="/"><a className="navbar-brand">Logout</a></Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link href="/setting"><a>Setting name</a></Link>
                </div>
            </div>
        </nav>
    )
}
