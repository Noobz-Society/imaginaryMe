import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Cookies from "universal-cookie";
import '../css/Login.css'
import Chara from '../assets/img/chara.svg'






export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);
    const cookies = new Cookies();

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
  
        
        const configuration = {
            method: "post",
            url: "http://localhost:4000/auth/login",
            data: {
              email,
              password,
            },
          };

        // make the API call
        axios(configuration)
        .then((result) => {
        setLogin(true);

          // set the cookie
          cookies.set("TOKEN", result.data, {
              path: "/",
            });
            console.log(result.data);
          //window.location.href = "/";
        })
        
        .catch((error) => {
        error = new Error();
        });
        
      }

    return (
        <div id="login_container">
                 <h2>Welcome back !</h2>
                 {/* display success message */}
             {login ? (
               <p className="text-success">You Are Logged in Successfully</p>
             ) : (
                 <></>
             )}
           <form>
             {/* email */}
               <input
                 type="email"
                 name="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 placeholder="Enter email"
               />
     
             {/* password */}
               <input
                 type="password"
                 name="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 placeholder="Password"
               />
           
     
     
             {/* submit button */}
             <input type="submit" value="Sign In" onClick={(e) => handleSubmit(e)}/>
               
           </form>
          <img src={Chara} alt="chibi_character" id="chibi_character"/>

        </div>
    )
}
