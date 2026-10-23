import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Employee");

    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();

        console.log({ name, emailId, password, role });

        alert("Registered Successfully");
        navigate("/login");
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
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
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
                    <option value="Employee">Employee</option>
                    <option value="HR">HR</option>
                </select>
                <br />

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;