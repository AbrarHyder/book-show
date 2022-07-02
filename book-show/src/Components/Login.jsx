import React from 'react'
import { useNavigate } from 'react-router-dom'


const login = () => {
    const [email,setEmail] = React.useState("")
    const [password,setPassword] = React.useState("")
    const navigate = useNavigate

    const handleLogin = () => {
        const payload = {email,password};

        fetch('https://reqres.in/api/login' , {
            method:"POST",
            body:JSON.stringify(payload),
            headers: {
                "Content-Type":"application/json"
            }
        })
        .then((res) => res.json())
        .then((res) => {
            if(res.token) {
                navigate("/")
            }
        }) 
        .catch((err) => {
            console.log(err)
        })
    }

}
function Login() {
    return (
        <div>
            <label> Email
            <input type="text" placeholder="Enter your Email" value = {email} onChange={(event) => setEmail(event.target.value)}/>
            </label>
            <label>Password
            <input type="password" placeholder="Enter your Password" value = {password} onChange={(event) => setPassword(event.target.value)}/>
            </label>
            <button onClick = {handleLogin}>login</button>
        </div>
    )
}

export default Login
