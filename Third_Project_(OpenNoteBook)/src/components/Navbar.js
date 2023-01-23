import React, { useEffect } from 'react'


// import react router component from react-router-dom
import {Link, useLocation} from "react-router-dom";

const Navbar = () => {

    let location = useLocation();

    useEffect(()=>{
        // console.log(location.pathname);
    }, [location]);

    return (
        <div className='NavBar'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Open NB</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname==='/'?"active":""}`} to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname==='/about'?"active":""}`} to="/about">About</Link>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar