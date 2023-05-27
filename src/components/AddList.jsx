import { useCallback, useEffect } from "react"
import debounce from "lodash.debounce"

export default function AddList({ searchText, onSetSearchText, searchSeries, handleSetSeries, handleFetchData, requestLoading, onSetSearchSeries }) {
    function handleOnKeyDown(e) {
        if (e.key === "Enter") {
            handleFetchData()
        }
    }

    function handleOnKeyUp(e) {
        if (e.key === "Backspace" && !searchText) {
            handleClearSearch()
        }
    }

    function handleClearSearch() {
        onSetSearchText("")
        onSetSearchSeries([])
    }

    const handleDebounce = useCallback(
        debounce((value) => {
            handleFetchData(value)
        }, 800),
        []
    )

    useEffect(() => {
        handleDebounce(searchText)
    }, [searchText])

    function handleSearch(e) {
        onSetSearchText(e.target.value)
    }
    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    value={searchText}
                    className="search-input"
                    placeholder="Search for series..."
                    onChange={e => handleSearch(e)}
                    onKeyDown={(e) => handleOnKeyDown(e)}
                    onKeyUp={(e) => handleOnKeyUp(e)}
                />
                <button onClick={handleClearSearch}>X</button>
            </div>
            <ul className={`add-list-ul ${searchSeries && "search-active"}`}>
                {
                    searchSeries && searchSeries.map(series => {
                        return (
                            <li
                                onClick={() => handleSetSeries(series)}
                                key={series.id}
                            >
                                <img src={`https://images.igdb.com/igdb/image/upload/t_thumb_2x/${series.cover.image_id}.jpg`} />
                                {series.name}
                            </li>

                        )
                    })
                }
            </ul>
        </>
    )
}