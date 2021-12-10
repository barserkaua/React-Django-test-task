import {Link, useNavigate} from "react-router-dom";
import {Button, Form, Nav} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../components/loader/Loader";
import Message from "../components/message/Message";
import FormContainer from "../components/form-container/FormContainer";

import {addNewUser} from "../actions/userAction";
import {USER_REGISTER_RESET} from "../constants/userConstants";


function UserAddScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();
    // we get our history
    const navigate = useNavigate()

    const userRegister = useSelector(state => state.userRegister);
    const {error, loading, success} = userRegister;

    useEffect(() => {
        if (success) {
            dispatch({type: USER_REGISTER_RESET})
            navigate(`/users`)
        }
    }, [navigate, success])

    const submitHandler = (e) => {
        e.preventDefault()

        if (password != confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(addNewUser(email, password))
        }
    }

    return (
        <div>
            <Link to='/users' className="btn btn-outline-primary my-3"><i className="fas fa-arrow-left"></i> Go Back</Link>
            <FormContainer>
                <h1>Register new user</h1>

                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader/>}

                <Form onSubmit={submitHandler}>

                    <Form.Group controlId='email'>
                        <Form.Label className="my-3">Email Address</Form.Label >
                        <Form.Control
                            required
                            type='email'
                            placeholder='Enter email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label className="my-3">Password</Form.Label>
                        <Form.Control
                            required
                            type='password'
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='passwordConfirm'>
                        <Form.Label className="my-3">Confirm Password</Form.Label>
                        <Form.Control
                            required
                            type='password'
                            placeholder='Confirm Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Button className='sign-in-btn my-3' type='submit' variant='primary'>Create</Button>

                </Form>

            </FormContainer>
        </div>
    )
}

export default UserAddScreen;