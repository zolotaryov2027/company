const SearchStatus = ({ users }) => {
  const renderPhrase = (number) => {
    const lastNumber = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) return "Человек тусанет";
    if ([2, 3, 4].indexOf(lastNumber) >= 0) return "Человека тусанут";
    if (lastNumber === 1) return "Человек тусанет";
  };
  return (
    <h2>
      <span className={"badge bg-" + (users.length > 0 ? "primary" : "danger")}>
        {users.length > 0
          ? `${users.length} ${renderPhrase(users.length)} с тобой сегодня`
          : "С тобой не кто не тусанет"}
      </span>
    </h2>
  );
};

export default SearchStatus;
