export default function Settings({bgColour, fontColour, setBgColour, setFontColour}) {
    
    function handleBgInput(e) {
        setBgColour(e.target.value)
    }

    function handleFontInput(e) {
        setFontColour(e.target.value)
    }

    return (
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
    )
}