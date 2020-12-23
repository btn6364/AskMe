import React, {useState, useEffect} from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { register, resetStatus } from '../../redux/user';
const SignUp = ()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [password2,setPassword2]=useState('');
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [username,setUsername]=useState('');
    const history=useHistory();
    const dispatch = useDispatch();
    const creatingStatus = useSelector(state=>state.user.creatingStatus);
    const createOnChange = (fnc)=>{
        return (e)=>{
            fnc(e.target.value);
        }
    }
    useEffect(() => {
        if (creatingStatus===true){
            dispatch(resetStatus());
            history.push('/login');
        }
    }, [creatingStatus, dispatch, history])
    const onSubmit = ()=>{
        //check valid
        if (email==='' || password==='' || password2==='' || username===''|| firstName==='' || lastName==='')
            return;
        if (password !== password2)
            return;

        let data={
            username,
            first_name:firstName,
            last_name:lastName,
            email,
            password
        }
        dispatch(register(data));
    }
    return(
        <Row className="justify-content-center">
            <Col sm={10} md={8} xl={6}>
                <Form className="sign-up">
                    <Form.Group controlId="formBasicUserName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            onChange={createOnChange(setUsername)}
                            value={username}
                            type="text" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control 
                            onChange={createOnChange(setFirstName)}
                            value={firstName}
                            type="text" placeholder="Enter First Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control 
                            onChange={createOnChange(setLastName)}
                            value={lastName}
                            type="text" placeholder="Enter email" />
                    </Form.Group>
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