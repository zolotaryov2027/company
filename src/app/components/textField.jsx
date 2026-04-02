const TextField = ({ label, type = "text", name, value, onChange }) => {
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
    </div>
  );
};

export default TextField;
