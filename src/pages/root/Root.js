import {useNavigate} from "react-router-dom";
import Button from "../../component/button/Button";
import "./Root.css"

export const Root = () => {
    const navigate = useNavigate()
    return (
        <div className="root">
            <div className={"title"}>KNET CARD APP</div>
            <br/>
            <Button text="START" onClick={() => navigate("/input")}/>
        </div>
    )
}