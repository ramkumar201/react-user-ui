const Button = ({ name, className }) => {
  return (
    <>
      <input
        type="submit"
        name="name"
        id="name"
        className={"btn-primary " + className}
        value={name}
      />
    </>
  );
};

export default Button;
