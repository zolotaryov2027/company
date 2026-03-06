import User from "./user";
const UserTable = ({ users }, onItemDelete) => {
  return (
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
        <User users={users} onUserDelete={onItemDelete} />
      </tbody>
    </table>
  );
};

export default UserTable;
