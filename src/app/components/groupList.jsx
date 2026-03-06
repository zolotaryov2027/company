const GroupList = ({
  items,
  valueProperty = "_id",
  contentProperty = "name",
  onItemsSelect,
  selectedItem,
}) => {
  return (
    <ul className="list-group">
      {items &&
        Object.keys(items).map((item) => (
          <li
            className={
              "list-group-item" +
              (items[item] === selectedItem ? " active" : "")
            }
            key={items[item][valueProperty]}
            onClick={() => onItemsSelect(items[item])}
            role="button"
          >
            {items[item][contentProperty]}
          </li>
        ))}
    </ul>
  );
};

export default GroupList;
