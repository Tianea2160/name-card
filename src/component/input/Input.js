import "./Input.css"

const Input = ({placeholder, onChange}) => {
    return (
        <input className="input" onChange={onChange} placeholder={placeholder}/>
    )
}

export default Input;

