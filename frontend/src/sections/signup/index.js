import React, {useState} from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './index.scss';
const SignUp = ()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [password2,setPassword2]=useState('');
    const history=useHistory();
    const createOnChange = (fnc)=>{
        return (e)=>{
            fnc(e.target.value);
        }
    }
    const onSubmit = ()=>{
        //Do something
        history.push('/');
    }
    return(
        <Row className="justify-content-center">
            <Col sm={10} md={8} xl={6}>
                <Form className="sign-up">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            onChange={createOnChange(setEmail)}
                            value={email}
                            type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            onChange={createOnChange(setPassword)}
                            value={password}
                            type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicPassword2">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                            onChange={createOnChange(setPassword2)}
                            value={password2}
                            type="password" placeholder="Password" />
                    </Form.Group>
                    <Button 
                        onClick={onSubmit}
                        variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    )
}

export default SignUp;