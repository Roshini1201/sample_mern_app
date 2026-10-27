import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Employee");

    const navigate = useNavigate();

    let handleRegister = async (event) => {
        event.preventDefault();

        let res = await fetch('http://localhost:7000/api/emp/register',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password, role })
            }
        )
        let data = await res.json()
        if (res.ok) {
            console.log("Data registered Success")
            console.log(data);
        } else {
            console.log("Data insertion FAILED")
            console.log(data);
        }
    };

    return (
        <div>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                    required
                />
                <br />

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    placeholder="Enter email ID"
                    required
                />
                <br />

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                />
                <br />

                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="EMPLOYEE">Employee</option>
                    <option value="HR">HR</option>
                </select>
                <br />

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;