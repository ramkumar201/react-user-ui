const Input = ({
  type = "text",
  name,
  id,
  placeholder,
  value,
  required = false,
  onChange,
  className,
}) => {
  return (
    <>
      <input
        className={className}
        required={required}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
