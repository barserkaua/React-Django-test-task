import {Link} from "react-router-dom";
import {Button, Table} from "react-bootstrap";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../components/loader/Loader";
import Message from "../components/message/Message";

import {listGroups} from "../actions/groupAction";
import {deleteGroup} from "../actions/groupAction";

function GroupsScreen(){

    const dispatch = useDispatch();

    const groupList = useSelector(state => state.groupList);
    const {loading, error, groups} = groupList;

    const userList = useSelector(state => state.userList);
    const {users} = userList;

    const groupDelete = useSelector(state => state.groupDelete)
    const {success:successDelete} = groupDelete;

    useEffect(() => {

        dispatch(listGroups())

    },[dispatch, successDelete])

    const deleteHandler = (id) => {
        let count_users_in_group = 0;
        if (window.confirm('Are you sure you want delete this group?')) {
            users.forEach(user => {
                user.groups.forEach(group => {
                    if (group.id === id) {
                        count_users_in_group++;
                    }
                })
            })
            if (count_users_in_group > 0) {
                window.alert('You can`t delete this group, because some users in there')
            }
            else {
                dispatch(deleteGroup(id))
            }
        }
    }

    return (
        <div>
            <div className="d-flex justify-content-between">
                <Link to='/' className="btn btn-outline-primary my-3"><i className="fas fa-arrow-left"></i> Go Back</Link>
                <Link to='/groups/add' className="btn btn-outline-info my-3">Add Group</Link>
            </div>

            <h2 className="text-center my-3">List of Groups</h2>

                {loading ? (<Loader/>)
                    : error ? (<Message variant="danger">{error}</Message>)
                        : (
                            <Table striped bordered hover responsive className='table-sm text-center'>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>DESCRIPTION</th>
                                    <th>ACTIONS</th>
                                </tr>
                                </thead>

                                <tbody>

                                {groups.map(group => (
                                    <tr key={group.id}>
                                        <td>{group.id}</td>
                                        <td>{group.name}</td>
                                        <td>{group.description}</td>

                                        <td>
                                            <Link to={`/groups/${group.id}/edit`}>
                                                <Button variant='light' className='btn-sm'>
                                                    <i className='fas fa-edit'></i>
                                                </Button>
                                            </Link>

                                            <Button onClick={() => deleteHandler(group.id)} variant='danger' className='btn-sm'>
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

export default GroupsScreen;