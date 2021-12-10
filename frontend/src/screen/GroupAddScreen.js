import {Button, Form} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../components/loader/Loader";
import Message from "../components/message/Message";
import FormContainer from "../components/form-container/FormContainer";

import {addNewGroup} from "../actions/groupAction";
import {GROUP_ADD_NEW_RESET} from "../constants/groupConstants";
import {addNewUser} from "../actions/userAction";

function GroupAddScreen() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();
    // we get our history
    const navigate = useNavigate()

    const groupAddNew = useSelector(state => state.groupAddNew);
    const {error, loading, success} = groupAddNew;

    useEffect(() => {
        if (success) {
            dispatch({type: GROUP_ADD_NEW_RESET})
            navigate(`/groups`)
        }
    }, [navigate, success])

    const submitHandler = (e) => {
        e.preventDefault()

        dispatch(addNewGroup(name, description))
    }

    return (
        <div>
            <Link to='/groups' className="btn btn-outline-primary my-3"><i className="fas fa-arrow-left"></i> Go Back</Link>
            <FormContainer>
                <h1>Add new Group</h1>

                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader/>}

                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='name'>
                        <Form.Label className="my-3">Name Group</Form.Label >
                        <Form.Control
                            type='name'
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='email'>
                        <Form.Label className="my-3">Description</Form.Label >
                        <Form.Control
                            as="textarea"
                            placeholder='Enter description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Button className='sign-in-btn my-3' type='submit' variant='primary'>Create</Button>

                </Form>
            </FormContainer>
        </div>
    )
}

export default GroupAddScreen;