import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import '../assets/css/Register.css'

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [register, setRegister] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // set configurations
         const configuration = {
             method: "post",
             url: "http://localhost:4000/auth/register",
             data: {
               email,
               name,
               password,
             },
           };

        // make the API call
        axios(configuration)
        .then((result) => {
          setRegister(true);
        })
        .catch((error) => {
          error = new Error();
        });
      }

    return (
        <div className="register_container">
                <h2>Sign up</h2>
               {/* display success message */}
               {register ? (
                 <p className="text-success">You Are Registered Successfully</p>
               ) : (
                 <></>
               )}
          <form>
            {/* email */}
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter a name"
              />
           
    
              <label for="email">Email address</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
    
    
            {/* password */}
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
    
            {/* submit button */}
            <input type="submit" value="Sign up" onClick={(e) => handleSubmit(e)} />
              
          </form>
        </div>
    )
}
