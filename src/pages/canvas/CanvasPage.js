import {useEffect, useRef} from "react";
import cardImage from "../../image/image.png"
import Button from "../../component/button/Button";
import "./CanvasPage.css"

/**
 * 미리 준비된 배경 이미지에 사람의 이름을 넣고 학과에 따라서 그 학과에 배정된 색깔을 넣는 화면 구성
 * canvas 태그를 이용해서 해당 기능을 동적으로 구현
 * @param name 현재 접속한 사용자의 이름
 */
export const CanvasPage = ({name}) => {
    const canvas = useRef(null)

    const loadImage = () => {
        const image = new Image()
        image.src = cardImage
        return image
    }

    const image = loadImage()
    image.onload = () => {
        const context = canvas.current.getContext("2d")
        context.drawImage(image, 0, 0, 500, 500)

        context.font = '35px Arial';
        context.fillStyle = 'black';
        context.fillText(name, 180, 225);
    }

    const download = () => {
        const dataUrl = canvas.current.toDataURL();
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = 'name_card.png';
        a.click();
    }

    return (
        <div className="canvas_page">
            <canvas className={"canvas"} ref={canvas}
                    width={500}
                    height={500}/>
            <Button
                text="DOWNLOAD"
                onClick={download}/>
        </div>
    )
}