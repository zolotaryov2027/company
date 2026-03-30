import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import QualitiesList from "./qualitiesList";

const UserPage = ({ userId }) => {
  const history = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => {
    API.users.getById(userId).then((data) => setUser(data));
  });
  if (user) {
    return (
      <div>
        <h1>{user.name}</h1>
        <h2>Профессия: {user.profession.name}</h2>
        <QualitiesList qualities={user.qualities} />
        <p>completedMeetings: {user.completedMeetings}</p>
        <h2>Оценка:{user.rate}</h2>
        <button onClick={() => history(-1)}>Все пользователи</button>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default UserPage;
