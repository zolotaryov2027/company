import Qualitie from "./qualities";
import Bookmark from "./bookmark";

const User = ({ users }) => {
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
          <td></td>
        </tr>
      ))}
    </>
  );
};

export default User;
