import Button from "../../component/button/Button";
import {useNavigate} from "react-router-dom";
import "./InputPage.css"
import Input from "../../component/input/Input";

export const InputPage = ({setName}) => {
    const navigate = useNavigate()

    const onNext = () => {
        navigate("/canvas")
    }
    return (
        <div className="input_page">
            <Input placeholder={"NAME"} onChange={(e) => setName(e.target.value)}/>
            <Button text="NEXT" onClick={onNext}/>
        </div>
    )
}