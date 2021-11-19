import ReactDOM from "react-dom";
import "./Popup.css"

export default function Popup({handlePopup, errMsg}){
    return ReactDOM.createPortal((
        <div className="popup-backdrop">
            <div className="popup">              
                {errMsg}
                {/* {setTimeout(handlePopup,2000)} */}
                <button onClick={handlePopup}>Close</button>
            </div>
        </div>
    ),document.body)
}
