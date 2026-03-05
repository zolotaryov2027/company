import { useState, useEffect } from "react";
import api from "./api";
import Users from "./components/users";
const App = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    console.log("start");
    api.users.fetchAll().then((data) => setUsers(data));
  }, []);
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };
  return <>{users && <Users users={users} onItemDelete={handleDelete} />}</>;
};

export default App;
