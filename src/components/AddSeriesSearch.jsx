export default function AddSeriesSearch({ searchText, onSetSearchText, handleFetchData, requestLoading }) {
    function handleOnKeyDown(e) {
        if (e.key === "Enter") {
            handleFetchData()
        }
    }
    return (
        <>
            <h2>Add Series</h2>
            <input
                type="text"
                value={searchText}
                className="search-input"
                placeholder="Search for series..."
                onChange={(e) => onSetSearchText(e.target.value)}
                onKeyDown={(e) => handleOnKeyDown(e)}
            />
            <button onClick={handleFetchData}>Search</button>
            <p>{requestLoading && "Loading..."}</p>
        </>
    )
}