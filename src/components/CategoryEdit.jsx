export default function CategoryEdit({categoryName, onSetCategoryNameChange}) {
    return (
        <>
            <input 
                type="text" 
                value={categoryName} 
                onChange={(e) => onSetCategoryNameChange(e.target.value)} 
            />
        </>
    )
}