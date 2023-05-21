import CategoryEdit from "./CategoryEdit"
import "./css/SeriesCategoryHeader.css"

export default function SeriesCategoryHeader({ categoryName, editCategoryName, onSetEditCategoryNameChange, onSetCategoryNameChange }) {
    return (
        <header className="category-header">
            <div className="header-title">
                {editCategoryName ?
                    <CategoryEdit categoryName={categoryName} onSetCategoryNameChange={onSetCategoryNameChange} /> :
                    <h2>{categoryName}</h2>
                }
            </div>
            <button onClick={() => onSetEditCategoryNameChange(!editCategoryName)}>
                {editCategoryName ? "Save" : "Edit"}
            </button>
        </header>
    )
}