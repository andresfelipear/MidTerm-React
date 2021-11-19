import ReactDOM from "react-dom";
import "./Popup.css"

export default function Popup({ handlePopup, errMsg }) {
    return ReactDOM.createPortal((

        <div className="popup-backdrop">

            {setTimeout(handlePopup,4000)}
            <div className="popup">
                <img className="img-notfound" src="/not-found.jpeg" alt="not-found" />
                <h1>AWWW...DON'T CRY.</h1>
                <p>{errMsg}</p>

            </div>
        </div>
    ), document.body)
}
