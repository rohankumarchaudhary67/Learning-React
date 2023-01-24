import React, { useEffect } from 'react'


// import react router component from react-router-dom
import {Link, useLocation, useNavigate} from "react-router-dom";

const Navbar = () => {

    let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

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
                    {!localStorage.getItem('token') ? <form className="form-inline my-2 my-lg-0">
                    <Link className="btn btn-primary mx-1 my-2 py-1 my-sm-0" to="/login" type="submit">Login</Link>
                    <Link className="btn btn-primary mx-1 my-2 py-1 my-sm-0" to="/signup" type="submit">SignUp</Link>
                    </form>:<button className='btn btn-primary' onClick={handleLogout}>Logout</button>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar