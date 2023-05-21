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
                onChange={(e) => onSetSearchText(e.target.value)}
                onKeyDown={(e) => handleOnKeyDown(e)}
            />
            <button onClick={handleFetchData}>Click Me</button>
            <p>{requestLoading ? "Loading..." : "Waiting for request"}</p>
        </>
    )
}