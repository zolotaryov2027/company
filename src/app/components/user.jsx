import Qualitie from "./qualities";
import Bookmark from "./bookmark";

const User = ({ users, onUserDelete }) => {
  return (
    <>
      {users.map((user) => (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>
            <Qualitie user={user} />
          </td>
          <td>{user.profession.name}</td>
          <td>{user.completedMeetings}</td>
          <td>{user.rate}</td>
          <td>
            <Bookmark />
          </td>
          <td>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => onUserDelete(user._id)}
            >
              Удалить
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default User;
