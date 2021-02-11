import React, { useState } from "react";
import { Form, Button} from 'react-bootstrap';
import axios from "axios";
const HomeScreen =(req, res)=>{


  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [Id, setId] = useState("");
 

  
    const submitHandler = async(e) => {
        e.preventDefault();
       let id= Number(Id);
       let data={id, name, email};
    await axios.post(`https://ypjm72q65l.execute-api.ap-south-1.amazonaws.com/dev/aws-insert-record`, data);
            console.log("Data Insserted")
        
      }
    return (
        <> <main className='main'>
            <Form onSubmit={submitHandler}>
            <Form.Group controlId="formBasicPassword">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter Unique ID"
                        value={Id}
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
   
}


export default HomeScreen;