import User from "./user";
const UserTable = ({ users, onSort, onItemDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("name")} scope="col">
            Имя
          </th>
          <th scope="col">Качества</th>
          <th onClick={() => onSort("profession.name")} scope="col">
            Профессия
          </th>
          <th onClick={() => onSort("completedMeetings")} scope="col">
            Встретился, раз
          </th>
          <th onClick={() => onSort("rate")} scope="col">
            Оценка
          </th>
          <th onClick={() => onSort("bookmark")} scope="col">
            Избранное
          </th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <User users={users} onUserDelete={onItemDelete} />
      </tbody>
    </table>
  );
};

export default UserTable;
