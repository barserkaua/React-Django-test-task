import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../header/Header";
import HomeScreen from "../../screen/HomeScreen";
import UsersScreen from "../../screen/UsersScreen";
import GroupsScreen from "../../screen/GroupsScreen";
import UserAddScreen from "../../screen/UserAddScreen";
import GroupAddScreen from "../../screen/GroupAddScreen";
import UserEditScreen from "../../screen/UserEditScreen";
import GroupEditScreen from "../../screen/GroupEditScreen";

function App() {
  return (
      <Router>
        <Header/>
        <main className="py-3">
          <Container>
            <Routes>
                <Route path="/" element={<HomeScreen/>} exact/>
                <Route path="/users" element={<UsersScreen/>}/>
                <Route path="/groups" element={<GroupsScreen/>}/>

                <Route path="/users/add" element={<UserAddScreen/>}/>
                <Route path="/groups/add" element={<GroupAddScreen/>}/>

                <Route path="/users/:id/edit" element={<UserEditScreen/>}/>
                <Route path="/groups/:id/edit" element={<GroupEditScreen/>}/>
            </Routes>
          </Container>
        </main>
      </Router>
  );
}

export default App;
