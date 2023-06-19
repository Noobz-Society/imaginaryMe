import React from 'react';
import { Form, Button } from "react-bootstrap";
import { useState } from 'react';
import axios from 'axios';
import Cookies from "universal-cookie";




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
        <>
            <h2>Sign in</h2>
            {/* display success message */}
        {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
            <></>
        )}
      <Form>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>


        {/* submit button */}
        <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
      </Form>
        </>
    )
}
