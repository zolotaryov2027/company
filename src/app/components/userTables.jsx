import User from "./user";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
const UserTable = ({ users, onSort, selectedSort }) => {
  const columns = {
    name: { path: "name", name: "Имя" },
    qualities: { name: "Качества" },
    professions: { path: "profession.name", name: "Профессия" },
    completedMeetings: { path: "completedMeetings", name: "Встретился, раз" },
    rate: { path: "rate", name: "Оценка" },
    bookmark: { path: "bookmark", name: "Избранное" },
    delete: {},
  };
  return (
    <table className="table">
      <TableHeader {...{ onSort, selectedSort, columns }} />
      <TableBody {...{ columns, data: users }} />
      {/* <tbody>
        <User users={users} onUserDelete={onItemDelete} />
      </tbody> */}
    </table>
  );
};

export default UserTable;
