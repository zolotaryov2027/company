import { useState, useEffect } from "react";
import paginate from "../utils/paginate";
import api from "../api";
import SearchStatus from "./searchStatus";
import User from "./user";
import Pagination from "./pagination";
import GroupList from "./groupList";
const Users = ({ users, onItemDelete }) => {
  const [professions, setProfessions] = useState();
  const count = users.length;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data));
  }, []);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleProfessionSelect = (params) => {
    console.log(params);
  };
  const userCrop = paginate(users, currentPage, pageSize);

  return (
    <>
      <GroupList items={professions} onItemsSelect={handleProfessionSelect} />
      <SearchStatus users={users} />
      {count > 0 && (
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
            <User users={userCrop} onUserDelete={onItemDelete} />
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
