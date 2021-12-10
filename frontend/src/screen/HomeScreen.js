import {Link} from "react-router-dom";


function HomeScreen() {
    return(
        <div>
            <h2>Hi, now you see Home Screen, and you not authorization user. Can we
                <Link to="/register" className=""> register </Link> your account for free?
            </h2>
        </div>
    )
}

export default HomeScreen;