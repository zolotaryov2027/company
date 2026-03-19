import Bookmark from "./bookmark";
import QualitiesList from "./qualitiesList";
import Table from "./table";

const UserTable = ({ users, onSort, selectedSort, onUserDelete }) => {
  const columns = {
    name: { path: "name", name: "Имя" },
    qualities: {
      name: "Качества",
      component: (user) => <QualitiesList qualities={user.qualities} />,
    },
    professions: { path: "profession.name", name: "Профессия" },
    completedMeetings: { path: "completedMeetings", name: "Встретился, раз" },
    rate: { path: "rate", name: "Оценка" },
    bookmark: { path: "bookmark", name: "Избранное", component: <Bookmark /> },
    delete: {
      component: (user) => (
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onUserDelete(user._id)}
        >
          Удалить
        </button>
      ),
    },
  };
  return (
    <Table
      onSort={onSort}
      selectedSort={selectedSort}
      columns={columns}
      data={users}
    />
    //   {/* <TableHeader {...{ onSort, selectedSort, columns }} />
    //   <TableBody {...{ columns, data: users }} />
    // </Table> */}
  );
};

export default UserTable;
