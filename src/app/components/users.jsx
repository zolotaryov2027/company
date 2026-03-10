import { useState, useEffect } from "react";
import paginate from "../utils/paginate";
import api from "../api";
import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import GroupList from "./groupList";
import UserTable from "./userTables";
const Users = ({ users, onItemDelete }) => {
  const [professions, setProfessions] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 2;

  const [selectedProf, setSelectedProf] = useState();

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data));
  }, []);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleProfessionSelect = (item) => {
    setSelectedProf(item);
    setCurrentPage(1);
  };

  const usersFiltered = selectedProf
    ? users.filter(
        (user) =>
          JSON.stringify(user.profession) === JSON.stringify(selectedProf),
      )
    : users;

  const count = usersFiltered.length;
  const userCrop = paginate(usersFiltered, currentPage, pageSize);

  const clearFilter = () => {
    setSelectedProf(undefined);
  };

  return (
    <div className="d-flex">
      {professions && (
        <div className="column-left m-2">
          <GroupList
            items={professions}
            onItemsSelect={handleProfessionSelect}
            selectedItem={selectedProf}
          />
          <button className="btn btn-secondary mt-2" onClick={clearFilter}>
            Очистить
          </button>
        </div>
      )}
      <div className="column-right flex-grow-1 m-2">
        <SearchStatus length={count} />
        {count > 0 && (
          <UserTable users={userCrop} onItemDelete={onItemDelete} />
        )}
        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Users;
