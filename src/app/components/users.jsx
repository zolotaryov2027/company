import React, { useState } from "react";
import API from "../api";
import SearchStatus from "./searchStatus";
import User from "./user";

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };
  return (
    <>
      <SearchStatus users={users} />
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <User users={users} onUserDelete={handleDelete} />
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
