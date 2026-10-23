import { useState } from "react"

import { useNavigate } from "react-router-dom";

function Login() {
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate()
    let [error,setError]=useState("")

    let handleLogin = (event) => {
        event.preventDefault()
        if (emailId == 'admin@gmail.com' && password == 'admin') {
            // console.log('login success')
            navigate("/userHome")
        } else {
            setError("Login Failed- Invalid Credentials")
        }
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input
                    type="mail"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                    placeholder="Enter email ID">
                </input><br />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password">
                </input><br />
                <button type="submit">Login</button>
            </form>

            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}

export default Login