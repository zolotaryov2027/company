const TextField = ({ label, type = "text", name, value, onChange, error }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        value={value}
        name={name}
        onChange={onChange}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default TextField;
