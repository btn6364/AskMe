import React, {useState, useEffect} from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/auth';
import './index.scss';
const SignIn = ()=>{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const history=useHistory();
    const dispatch = useDispatch();
    const isAuthed = useSelector(state=>state.auth.isAuthed);
    const createOnChange = (fnc)=>{
        return (e)=>{
            fnc(e.target.value);
        }
    }
    useEffect(() => {
        if (isAuthed){//login success
            history.push('/');
        }
    }, [isAuthed, history]);
    const onSubmit = ()=>{
        let form={
            username,
            password
        };
        dispatch(login(form));
        //Do something
    }
    return(
        <Row className="justify-content-center">
            <Col sm={10} md={8} xl={6}>
                <Form className="sign-in">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            onChange={createOnChange(setUsername)}
                            value={username}
                            type="text" placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            onChange={createOnChange(setPassword)}
                            value={password}
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

export default SignIn;