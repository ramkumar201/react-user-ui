const Input = ({
    type = 'text', name, id, placeholder, value, required = false, onChange
}) => {

    return (
        <>
            <input
                required={required}
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </>
    )

}

export default Input