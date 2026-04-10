import { useState } from "react";
const Bookmark = () => {
  const [favorites, setFavorites] = useState(false);
  const handleFavorites = () => {
    setFavorites(!favorites);
  };
  return (
    <>
      <button className="btn btn-sm" onClick={handleFavorites}>
        {favorites ? (
          <i className="bi bi-bookmark-check-fill"></i>
        ) : (
          <i className="bi bi-bookmark-check"></i>
        )}
      </button>
    </>
  );
};

export default Bookmark;
