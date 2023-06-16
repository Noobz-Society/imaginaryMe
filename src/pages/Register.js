import React from 'react';
import { Form, Button } from "react-bootstrap";
import { useState } from 'react';
import axios from 'axios';

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
             url: "http://localhost:4000/register",
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
        <>
            <h2>Inscription</h2>
           {/* display success message */}
           {register ? (
             <p className="text-success">You Are Registered Successfully</p>
           ) : (
             <></>
           )}
      <Form>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter a name"
          />
        </Form.Group>

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
        <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)} >
          Submit
        </Button>
      </Form>
        </>
    )
}
