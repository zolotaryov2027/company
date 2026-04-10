const Qualitie = ({ user }) => {
  return (
    <>
      {user.qualities.map((qualitie) => (
        <span className={"badge m-2 bg-" + qualitie.color} key={qualitie._id}>
          {qualitie.name}{" "}
        </span>
      ))}
    </>
  );
};

export default Qualitie;
