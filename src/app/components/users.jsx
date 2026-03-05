import React, { useState, useEffect } from "react";
import API from "../api";
import SearchStatus from "./searchStatus";
import User from "./user";
import Pagination from "./pagination";
import GroupList from "./groupList";
import paginate from "../utils/paginate";

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
  const [professions, setProfessions] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const count = users.length;
  const pageSize = 4;

  useEffect(() => {
    API.professions.fetchAll().then((data) => setProfessions(data));
  }, [professions]);

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const handleProfessionSelect = (params) => {
    console.log(params);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const userCrop = paginate(users, currentPage, pageSize);
  return (
    <>
      <GroupList items={professions} onItemsSelect={handleProfessionSelect} />
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
            <User users={userCrop} onUserDelete={handleDelete} />
          </tbody>
        </table>
      )}
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Users;
