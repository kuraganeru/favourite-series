import { useState } from "react"
import ReactModal from "react-modal"

export default function Settings({ bgColour, fontColour, setBgColour, setFontColour }) {
    const [modalIsOpen, setIsOpen] = useState(false);

    const modalStyles = {
        content: {
            maxHeight: "400px",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "25%",
            padding: "40px"
        }
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleBgInput(e) {
        setBgColour(e.target.value)
    }

    function handleFontInput(e) {
        setFontColour(e.target.value)
    }

    return (
        <>
            <button onClick={openModal} className="button setting-btn">⚙</button>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="App Settings"
                style={modalStyles}
            >
                <div className="container">
                    <div className="setting">
                        <input type="color" name="color-bg" id="color-bg" onInput={handleBgInput} value={bgColour} />
                        <label htmlFor="color-bg">Background Colour</label>
                    </div>

                    <div className="setting">
                        <input type="color" name="color-font" id="color-font" onInput={handleFontInput} value={fontColour} />
                        <label htmlFor="color-bg">Font Colour</label>
                    </div>
                </div>
            </ReactModal>
        </>
    )
}