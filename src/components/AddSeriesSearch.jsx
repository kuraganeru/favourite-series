export default function AddSeriesSearch({ searchText, onSetSearchText, handleFetchData }) {
    return (
        <>
            <h2>Add Series</h2>
            <input
                type="text"
                value={searchText}
                onChange={(e) => onSetSearchText(e.target.value)}
            />
            <button onClick={handleFetchData}>Click Me</button>
        </>
    )
}