import {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import FormContainer from "../components/form-container/FormContainer";
import {Button, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../components/loader/Loader";
import Message from "../components/message/Message";
import {updateUser, getUserDetails} from "../actions/userAction";
import {USER_UPDATE_RESET} from "../constants/userConstants";
import {listGroups} from "../actions/groupAction";


function UserEditScreen() {

    const [email, setEmail] = useState('');
    const [group, setGroup] = useState('');

    const {id} = useParams();

    // we get our history
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const groupList = useSelector(state => state.groupList);
    const {error:errorGroups, loading:loadingGroups, groups} = groupList;

    const userDetails = useSelector(state => state.userDetails);
    const {error, loading, user} = userDetails;

    const userUpdate = useSelector(state => state.userUpdate);
    const {error:errorUpdate, loading:loadingUpdate, success:successUpdate} = userUpdate;


    useEffect(() => {
        dispatch(listGroups())
    // we check if we successfully update our user
        if (successUpdate) {
            dispatch({type:USER_UPDATE_RESET})
            // we redirect our user to:
            navigate('/users')
        } else {
            if (!user.email || user._id !== Number(id)){
                dispatch(getUserDetails(id))
            } else {
                setEmail(user.email)
            }
        }
    }, [successUpdate, navigate, id, dispatch, user])


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({_id:user._id, groups: group, email}))
    }

    console.log(group)

    return (
        <div>
            <Link to='/users' className="btn btn-outline-success my-3"><i className="fas fa-arrow-left"></i> Go Back</Link>
            <FormContainer>
                <h1>Edit User</h1>
                {loadingUpdate && <Loader/>}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

                {loading ? (<Loader/>)
                    : error ? (<Message variant='danger'>{error}</Message>)
                    : loadingGroups ? (<Loader/>) : errorGroups ? (<Message variant='danger'>{errorGroups}</Message>)
                    : (
                        <Form onSubmit={submitHandler}>

                            <Form.Group controlId='email'>
                                <Form.Label className="my-3">Email Address</Form.Label >
                                <Form.Control
                                    type='email'
                                    placeholder='Enter email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='group'>
                                <Form.Label className="my-3">Group</Form.Label >
                                <Form.Select
                                    required
                                    value={group}
                                    onChange={(e) => setGroup(e.target.value)}
                                >
                                    {groups.map(group => (
                                        <option key={group.id} defaultValue={group.name}>
                                            {group.name}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>

                            <Button className='sign-in-btn my-3' type='submit' variant='primary'>Update</Button>

                        </Form>
                    )}
            </FormContainer>
        </div>
    )
}

export default UserEditScreen;