import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarManu from './NavBarManu';
function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function login() {
        fetch(`http://localhost:3000/login?q=${name}`)
            .then((data) => {
                data.json().then((resp) => {
                    console.log("resp", resp);
                    if (resp.length > 0) {
                        localStorage.setItem('login', JSON.stringify(resp))
                        console.log('Successful login');
                      
                        navigate('/home');
                    } else {
                        alert("Please Check Username and Password");
                    }
                });
            });
    }

    return (
        <div>
            <NavBarManu />
            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <br /><br />
            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <br /><br />
            <button onClick={login}>Login</button>
        </div>
    );
}

export default Login;
