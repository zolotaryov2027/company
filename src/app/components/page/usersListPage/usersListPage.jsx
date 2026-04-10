import { useState, useEffect } from "react";
import paginate from "../../../utils/paginate";
import api from "../../../api";
import _ from "lodash";
import SearchStatus from "../../ui/searchStatus";
import Pagination from "../../common/pagination";
import GroupList from "../../common/groupList";
import UserTable from "../../ui/userTables";
const UsersListPage = () => {
  const [professions, setProfessions] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });
  const pageSize = 8;

  const [users, setUsers] = useState();
  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data));
  }, []);
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const [selectedProf, setSelectedProf] = useState();

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data));
  }, []);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleProfessionSelect = (item) => {
    if (searchQuery !== "") setSearchQuery("");
    setSelectedProf(item);
    setCurrentPage(1);
  };

  const handleSearchQuery = ({ target }) => {
    setSelectedProf(undefined);
    setSearchQuery(target.value);
  };

  const handleSort = (item) => {
    setSortBy(item);
  };

  if (users) {
    const usersFiltered = searchQuery
      ? users.filter(
          (user) =>
            user.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1,
        )
      : selectedProf
        ? users.filter(
            (user) =>
              JSON.stringify(user.profession) === JSON.stringify(selectedProf),
          )
        : users;

    const count = usersFiltered.length;
    const sortedUsers = _.orderBy(usersFiltered, [sortBy.path], [sortBy.order]);
    const userCrop = paginate(sortedUsers, currentPage, pageSize);

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
          <input
            type="text"
            name="searchQuery"
            placeholder="Search..."
            onChange={handleSearchQuery}
            value={searchQuery}
          />
          {count > 0 && (
            <UserTable
              users={userCrop}
              onSort={handleSort}
              selectedSort={sortBy}
              onDelete={handleDelete}
            />
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
  }
  return "Подождите идет загрузка";
};

export default UsersListPage;
