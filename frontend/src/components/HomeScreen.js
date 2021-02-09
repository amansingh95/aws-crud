import React, { useState, useEffect } from "react";
import { Form, Button} from 'react-bootstrap';
import axios from "axios";
const HomeScreen =(req, res)=>{


  const [name, setName] = useState("");

  const [emai, setEmail] = useState("");

  const [id, setId] = useState("");
    return (
        <> <main className='main'>
            <Form>
            <Form.Group controlId="formBasicPassword">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter Unique ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                        placeholder="Enter email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                   
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </main>
        </>
    )
    const insert_data=req.body
}


export default HomeScreen;