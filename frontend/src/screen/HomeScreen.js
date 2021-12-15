import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";


function HomeScreen() {
    return(
        <div>
            <h2 className="text-center my-3 p-2">This is Home Screen and now you see nothing, but, you can press one of this buttons
                <br/>
                <i className="fas fa-arrow-down"></i>
                <br/>
                <Link to="/users"><Button variant="info" className="btn btn-block my-3 mx-3">Users</Button></Link>
                <Link to="/groups"><Button variant="info" className="btn btn-block my-3 mx-3">Groups</Button></Link>
                <br/>
            </h2>
        </div>
    )
}

export default HomeScreen;