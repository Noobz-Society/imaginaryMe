import React from 'react';
import { useState, useContext } from 'react';
import axios from 'axios';
import Cookies from "universal-cookie";
import '../assets/css/Login.css'
import Chara from '../assets/img/chara.svg'
import { AuthContext } from '../AuthContext';

const uri = process.env.REACT_APP_URI;


export default function Login() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { handleLogin } = useContext(AuthContext);
    const cookies = new Cookies();
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();

  
        const configuration = {
            method: "post",
            url: `${uri}/auth/login`,
            data: {
              email,
              password,
            },
          };

        // make the API call
        axios(configuration)
        .then((result) => {
          handleLogin(); // Set login status to true


          const token = result.data;


          // set the cookie
          cookies.set("TOKEN", token, {
              path: "/",
            });
            
          window.location.href = "/";
          
        })
        
        
        .catch((error) => {
          if (error.response && error.response.data) {
            const errorMessages = error.response.data.map((apiError) => apiError.message);
            setErrorMessage(errorMessages.join(", "));
          } else {
            setErrorMessage("An error occurred. Please try again.");
          }
        });
       
    };

    return (
        <div id="login_container">
            <h2>Welcome back !</h2>
           <form className="login_form">
             {/* email */}
             <label for="email">E-mail</label>
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
             <input type="submit" value="Sign In" onClick={(e) => handleSubmit(e)}/>
             {errorMessage && <p className="text-failed">{errorMessage}</p>}
           </form>
         
          <img src={Chara} alt="chibi_character" id="chibi_character"/>

        </div>
    )
}
