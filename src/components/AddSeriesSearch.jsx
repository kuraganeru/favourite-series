export default function AddSeriesSearch({ searchText, onSetSearchText, handleFetchData, requestLoading }) {
    return (
        <>
            <h2>Add Series</h2>
            <input
                type="text"
                value={searchText}
                onChange={(e) => onSetSearchText(e.target.value)}
            />
            <button onClick={handleFetchData}>Click Me</button>
            <p>{requestLoading ? "Loading..." : "Waiting for request"}</p>
        </>
    )
}