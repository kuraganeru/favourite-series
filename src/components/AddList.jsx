export default function AddList({ searchText, onSetSearchText, searchSeries, handleSetSeries, handleFetchData, requestLoading }) {
    function handleOnKeyDown(e) {
        if (e.key === "Enter") {
            handleFetchData()
        }
    }
    return (
        <>
            <input
                type="text"
                value={searchText}
                className="search-input"
                placeholder="Search for series..."
                onChange={(e) => onSetSearchText(e.target.value)}
                onKeyDown={(e) => handleOnKeyDown(e)}
            />
            <ul>
                {
                    searchSeries && searchText && searchSeries.map(series => {
                        return (
                            <li
                                onClick={() => handleSetSeries(series)}
                                key={series.id}
                            >
                                {series.name}
                            </li>

                        )
                    })
                }
            </ul>
        </>
    )
}