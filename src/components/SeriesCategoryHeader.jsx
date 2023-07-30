import CategoryEdit from "./CategoryEdit"
import Settings from "./Settings/Settings"
// import "./css/SeriesCategoryHeader.css"

export default function SeriesCategoryHeader({ categoryName, editCategoryName, onSetEditCategoryNameChange, onSetCategoryNameChange, fontStyle, bgColour, fontColour, setBgColour, setFontColour }) {
    return (
        <header className="container">
            {editCategoryName ?
                <CategoryEdit categoryName={categoryName} onSetCategoryNameChange={onSetCategoryNameChange} /> :
                <h2 style={fontStyle}>{categoryName}</h2>
            }
            <button onClick={() => onSetEditCategoryNameChange(!editCategoryName)}>
                {editCategoryName ? "Save" : "Edit"}
            </button>
            <Settings
                bgColour={bgColour}
                fontColour={fontColour}
                setBgColour={setBgColour}
                setFontColour={setFontColour}
            />
        </header>
    )
}