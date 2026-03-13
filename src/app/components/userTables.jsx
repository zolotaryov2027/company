import User from "./user";
import TableHeader from "./tableHeader";
const UserTable = ({ users, onSort, selectedSort, onItemDelete }) => {
  const columns = {
    name: { iter: "name", name: "Имя" },
    qualities: { name: "Качества" },
    professions: { iter: "profession.name", name: "Профессия" },
    completedMeetings: { iter: "completedMeetings", name: "Встретился, раз" },
    rate: { iter: "rate", name: "Оценка" },
    bookmark: { iter: "bookmark", name: "Избранное" },
    delete: {},
  };
  return (
    <table className="table">
      <TableHeader {...{ onSort, selectedSort, columns }} />
      <tbody>
        <User users={users} onUserDelete={onItemDelete} />
      </tbody>
    </table>
  );
};

export default UserTable;
