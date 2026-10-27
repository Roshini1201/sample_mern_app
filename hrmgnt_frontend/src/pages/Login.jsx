import { useState } from "react"

import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate()
    let [error, setError] = useState("")

    let handleLogin = async (event) => {
        event.preventDefault()
        if (email === 'admin@gmail.com' && password === 'admin') {
            // console.log('login success')
            setError("")
            navigate("/adminhome")
        } else {
            let req = await fetch("http://localhost:7000/api/emp/login", {
                method: "POST",
                header: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            }
            );
            let data = await req.json()
            console.log(data)
            // setError("Login Failed- Invalid Credentials")
        }
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input
                    type="mail"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
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