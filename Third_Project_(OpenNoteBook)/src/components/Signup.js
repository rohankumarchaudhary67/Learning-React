import React, {useState} from 'react'
import { useNavigate } from 'react-router'

const Signup = () => {

    
    const [credentials, setCredentials] = useState({name:"", email: "", password: ""}) 

    let navigate = useNavigate();

    const handleSignup = async(e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password})
        });

        const json = await response.json();
        console.log(json);

        if(json.success){
            localStorage.removeItem('token');
            // save the auth token and redirect
            localStorage.setItem('token', json.auth_Token)
            navigate('/');

        }else{
            alert("Invalid Credentials");
        }
    
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div className='d-flex flex-column align-items-center my-5'>

            <h1 className='my-3'>Sign Up</h1>

            <form onSubmit={handleSignup}>
                <div className="form-group my-3">
                    <input type="text" name="name" value={credentials.namel} className="form-control" id="name" aria-describedby="emailHelp" placeholder="Full Name" onChange={onChange} />
                </div>
                <div className="form-group my-3">
                    <input type="email" name="email" value={credentials.email} className="form-control" id="email" aria-describedby="emailHelp" placeholder="E-mail/G-mail" onChange={onChange} />
                </div>
                <div className="form-group my-3">
                    <input type="password" name="password" value={credentials.password} className="form-control" id="password" placeholder="Password" onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary my-2">Log in</button>
            </form>

        </div>
    )
}

export default Signup