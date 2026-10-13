import { useState } from 'react'

function Contact(){
    let [name, setName]=useState("")
    let [age,setAge]=useState(18)
    let [phno,setPhno]=useState("")

    let RegisterData=(event) => {
        event.preventDefault();

        // used to collect data
        console.log(name);
        console.log(age);
        console.log(phno);
    }

    return(
        <div>
            <h1>Contact Page</h1>
            <form onSubmit={RegisterData}>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your name"></input><br/>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter your age"></input><br/>
                <input type="text" value={phno} onChange={(e) => setPhno(e.target.value)} placeholder="Enter your phone number"></input><br/>
                <button>Submit</button>
            </form>
            <h4>{name}</h4>
            <h4>{age}</h4>
            <h4>{phno}</h4>
        </div>
    )
}

export default Contact