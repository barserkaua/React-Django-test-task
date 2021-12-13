import {useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Button, Table} from "react-bootstrap";

import {listUsers, deleteUser} from "../actions/userAction";
import Loader from "../components/loader/Loader";
import Message from "../components/message/Message";

function UsersScreen(){

    const dispatch = useDispatch();

    const userList = useSelector(state => state.userList);
    const {loading, error, users} = userList;

    const userDelete = useSelector(state => state.userDelete)
    const {success:successDelete} = userDelete;

    useEffect(() => {

        dispatch(listUsers())

    },[dispatch, successDelete])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure you want delete this user?')) {
            dispatch(deleteUser(id))
        }
    }

    return (
        <div>
            <div className="d-flex justify-content-between">
                <Link to='/' className="btn btn-outline-primary my-3"><i className="fas fa-arrow-left"></i> Go Back</Link>
                <Link to='/users/add' className="btn btn-outline-info my-3">Add User</Link>
            </div>

            <h2 className="text-center my-3">List of Users</h2>
            {loading ? (<Loader/>)
                : error ? (<Message variant="danger">{error}</Message>)
                    : (
                        <Table striped bordered hover responsive className='table-sm text-center'>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>EMAIL</th>
                                <th>GROUP</th>
                                <th>ADMIN</th>
                                <th>ACTIONS</th>
                            </tr>
                            </thead>

                            <tbody>
                            {users.map(user => (
                                <tr key={user._id}>
                                    <td>{user._id}</td>
                                    <td>{user.email}</td>
                                    <td>{user.groups.map(group => (
                                        <div key={group.id}>{group.name}</div>
                                    ))}</td>
                                    <td>{user.isAdmin ? (
                                        <i className='fas fa-check' style={{color:'green'}}></i>
                                    ) : (
                                        <i className='fas fa-check' style={{color:'red'}}></i>
                                    )}</td>
                                    <td >
                                        <Link to={`/users/${user._id}/edit`} >
                                            <Button variant='light' className='btn-sm'>
                                                <i className='fas fa-edit'></i>
                                            </Button>
                                        </Link>

                                        <Button onClick={() => deleteHandler(user._id)} variant='danger' className='btn-sm'>
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                    </td>
                                </tr>
                            ))}

                            </tbody>
                        </Table>
                    )}
        </div>
    )
}

export default UsersScreen;