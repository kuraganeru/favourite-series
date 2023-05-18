import CategoryEdit from "./CategoryEdit"

export default function SeriesCategoryHeader({categoryName}) {
    return (
        <>
            <h1>{categoryName}</h1>
            <CategoryEdit />
        </>
    )
}