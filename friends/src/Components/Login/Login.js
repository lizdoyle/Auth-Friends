import React, {useState} from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";

const Login = (props) => {

    const [credentials, setCredentials] = useState({});

    
     const login = e => {
        e.preventDefault();
        axiosWithAuth.post('http://localhost:5000/api', credentials)
                .then(res => {
                    console.log(res.data)

                    localStorage.setItem('token', res.data.token);
                    this.props.history.push('/');
                })
                .catch(err => console.log(err))
    }

    const changeHandler = event => {

        setCredentials({
            ...credentials,
             [event.target.name]: event.target.value 
            });
    }

    return (
        <form onSubmit={login} className="loginForm">
            <label htmlFor="userName"> Username</label>
            <input
                type="text"
                name="userName"
                placeholder="UserName"
                value={credentials.userName}
                onChange={changeHandler}
            />

            <label htmlFor="password"> Password</label>
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={changeHandler}
            />

            <button type="submit">Login</button>

        </form>
    )
    }

export default Login