import {Link, useNavigate, useParams} from "react-router-dom";
import FormContainer from "../components/form-container/FormContainer";
import {Button, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GROUP_UPDATE_RESET} from "../constants/groupConstants";
import {getGroupDetails, updateGroup} from "../actions/groupAction";
import Loader from "../components/loader/Loader";
import Message from "../components/message/Message";


function GroupEditScreen() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const {id} = useParams();

    // we get our history
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const groupDetails = useSelector(state => state.groupDetails);
    const {error, loading, group} = groupDetails;

    const groupUpdate = useSelector(state => state.groupUpdate);
    const {error:errorUpdate, loading:loadingUpdate, success:successUpdate} = groupUpdate;


    useEffect(() => {
        // we check if we successfully update our user
        if (successUpdate) {
            dispatch({type:GROUP_UPDATE_RESET})
            // we redirect our group to:
            navigate('/groups')
        } else {
            if (!group.name || group.id !== Number(id)){
                dispatch(getGroupDetails(id))
            } else {
                setName(group.name)
                setDescription(group.description)
            }
        }
    }, [successUpdate, navigate, id, dispatch, group])


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateGroup({id:group.id, name, description}))
    }

    console.log(group.name, group.id)

    return (
        <div>
            <Link to='/users' className="btn btn-outline-success my-3"><i className="fas fa-arrow-left"></i> Go Back</Link>
            <FormContainer>
                <h1>Edit Group</h1>

                {loadingUpdate && <Loader/>}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

                {loading ? (<Loader/>) : error ? (<Message variant='danger'>{error}</Message>)
                    : (
                        <Form onSubmit={submitHandler}>

                            <Form.Group controlId='email'>
                                <Form.Label className="my-3">Group Name</Form.Label >
                                <Form.Control
                                    type='text'
                                    placeholder='Enter group name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='email'>
                                <Form.Label className="my-3">Group Name</Form.Label >
                                <Form.Control
                                    as="textarea"
                                    placeholder='Enter group descriptions'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Button className='sign-in-btn my-3' type='submit' variant='primary'>Update</Button>

                        </Form>
                    )}
            </FormContainer>
        </div>
    )
}

export default GroupEditScreen;