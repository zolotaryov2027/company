const GroupList = ({ items }) => {
  return (
    <ul className="list-group">
      {items &&
        Object.keys(items).map((item) => (
          <li className="list-group-item" key={"profession_" + item}>
            {items[item].name}
          </li>
        ))}
    </ul>
  );
};

export default GroupList;
