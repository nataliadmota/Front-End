import React from "react";
import {Form} from "react-bootstrap";
import "./Login.css";

function Login () {
    return (
        <div className="base">
            <div className="container">
                <div>
                    <h1>Login</h1>
                    <Form className="inputs">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <input></input>
                        <input></input>
                        <button>Entrar</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;