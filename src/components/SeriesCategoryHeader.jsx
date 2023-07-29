import CategoryEdit from "./CategoryEdit"
// import "./css/SeriesCategoryHeader.css"

export default function SeriesCategoryHeader({ categoryName, editCategoryName, onSetEditCategoryNameChange, onSetCategoryNameChange, fontStyle }) {
    return (
        <header className="container">
            {editCategoryName ?
                <CategoryEdit categoryName={categoryName} onSetCategoryNameChange={onSetCategoryNameChange} /> :
                <h2 style={fontStyle}>{categoryName}</h2>
            }
            <button onClick={() => onSetEditCategoryNameChange(!editCategoryName)}>
                {editCategoryName ? "Save" : "Edit"}
            </button>
        </header>
    )
}