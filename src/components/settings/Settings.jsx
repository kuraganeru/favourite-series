export default function Settings({setBgColour, setFontColour}) {
    
    function handleBgInput(e) {
        setBgColour(e.target.value)
    }

    function handleFontInput(e) {
        setFontColour(e.target.value)
    }

    return (
        <div className="container">
            <div className="setting">
                <input type="color" name="color-bg" id="color-bg" onInput={handleBgInput} />
                <label htmlFor="color-bg">Background Colour</label>
            </div>

            <div className="setting">
                <input type="color" name="color-font" id="color-font" onInput={handleFontInput} />
                <label htmlFor="color-bg">Font Colour</label>
            </div>
        </div>
    )
}