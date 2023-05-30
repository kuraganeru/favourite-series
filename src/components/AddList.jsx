import { useCallback, useEffect, useRef } from "react"
import debounce from "lodash.debounce"

export default function AddList({ searchText, onSetSearchText, searchSeries, handleSetSeries, handleFetchData, requestLoading, onSetSearchSeries }) {
    const listRef = useRef(null)
    
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

    function handleSearch(e) {
        onSetSearchText(e.target.value)
    }

    useEffect(() => {
        handleDebounce(searchText)
    }, [searchText])

    useEffect(() => {
        const handleOutsideClick = e => {
            if (searchSeries.length > 0 && listRef.current && !listRef.current.contains(e.target)) {
                handleClearSearch()
            }
        }

        document.addEventListener("mousedown", handleOutsideClick)

        return window.removeEventListener("mousedown", handleOutsideClick)
    }, [searchSeries])
    return (
        <>
            <div className={`search-container ${searchText && searchSeries.length > 0 ? "search-container-active" : ""}`}>
                <input
                    type="text"
                    value={searchText}
                    className="search-input"
                    placeholder="Search for series..."
                    onChange={e => handleSearch(e)}
                    onKeyDown={(e) => handleOnKeyDown(e)}
                    onKeyUp={(e) => handleOnKeyUp(e)}
                />
                <button onClick={handleClearSearch} aria-busy={requestLoading ? true : ""}>{!requestLoading ? "✕" : ""}</button>
            </div>
            <ul 
                className={`add-list-ul ${searchSeries.length > 0 ? "search-active" : ""}`}
                ref={listRef}
                >
                {
                    searchSeries.length > 0 && searchSeries.map(series => {
                        return (
                            <li
                                onClick={() => handleSetSeries(series)}
                                key={series.id}
                            >
                                <img src={`https://images.igdb.com/igdb/image/upload/t_thumb_2x/${series.cover.image_id}.jpg`} />
                                <span>{series.name}</span>
                            </li>

                        )
                    })
                }
            </ul>
        </>
    )
}