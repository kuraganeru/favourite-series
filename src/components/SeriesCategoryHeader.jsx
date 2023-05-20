import CategoryEdit from "./CategoryEdit"

export default function SeriesCategoryHeader({ categoryName, editCategoryName, onSetEditCategoryNameChange, onSetCategoryNameChange }) {
    return (
        <>
            {editCategoryName ?
                <CategoryEdit categoryName={categoryName} onSetCategoryNameChange={onSetCategoryNameChange} /> :
                <h2>{categoryName}</h2>
            }
            <button onClick={() => onSetEditCategoryNameChange(!editCategoryName)}>
                {editCategoryName ? "Save" : "Edit"}
            </button>
        </>
    )
}