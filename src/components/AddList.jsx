import { useCallback, useEffect, useRef, useState } from "react"
import debounce from "lodash.debounce"

export default function AddList({ searchText, onSetSearchText, searchSeries, handleSetSeries, handleFetchData, requestLoading, onSetSearchSeries, series }) {
    const listRef = useRef(null)
    const btnRef = useRef(null)
    const [sliceIndex, setSliceIndex] = useState(5)

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
        setSliceIndex(5)
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

    useEffect(() => { // update slice index back to 5 after searchSeries has been updated (after search)
        setSliceIndex(5)
    }, [searchSeries])

    useEffect(() => {
        const handleOutsideClick = e => {
            if (searchSeries.length > 0 && listRef.current && e.target.nodeName !== "INPUT" && e.target.nodeName !== "BUTTON" && !listRef.current.contains(e.target)) {
                handleClearSearch()
            }
        }

        document.addEventListener("mousedown", handleOutsideClick)

        return window.removeEventListener("mousedown", handleOutsideClick)
    }, [searchSeries])

    function handleShowMoreResults() {
        console.log(btnRef)
        setSliceIndex(sliceIndex + 5)
    }

    function limitSearchResult() {
        return searchSeries.slice(0, sliceIndex)
    }

    function returnEndOfResults() {
        return sliceIndex > searchSeries.length
    }

    // useEffect(() => {
    //     // console.log(btnRef.current)
    //     btnRef.current?.scrollIntoView()
    // }, [btnRef.current?.offsetTop])

    return (
        <>
            <div className={`search-container ${searchText && searchSeries.length > 0 ? "search-container-active" : ""}`}>
                <input
                    type="text"
                    value={searchText}
                    className="search-input"
                    placeholder="Search for series..."
                    onChange={handleSearch}
                    onKeyDown={handleOnKeyDown}
                    onKeyUp={handleOnKeyUp}
                />
                <button onClick={handleClearSearch} aria-busy={requestLoading ? true : ""}>{!requestLoading ? "✕" : ""}</button>
            </div>
            <ul 
                className={`add-list-ul ${searchSeries.length > 0 ? "search-active" : ""}`}
                ref={listRef}
                >
                {
                    searchSeries.length > 0 && limitSearchResult().map(oneSeries => {
                        const foundAddedSeries = series.find(series => series.id === oneSeries.id)
                        return (
                            <li
                                className={foundAddedSeries ? "not-allowed" : ""}
                                onClick={() => handleSetSeries(oneSeries)}
                                key={oneSeries.id}
                            >
                                <img 
                                    src={`https://images.igdb.com/igdb/image/upload/t_thumb_2x/${oneSeries.cover.image_id}.jpg`}
                                    className={foundAddedSeries ? "transparent-4" : ""} 
                                    />
                                <span className={foundAddedSeries ? "transparent-4" : ""}>{oneSeries.name}</span>
                            </li>

                        )
                    })
                }
                {searchSeries.length > 0 && 
                    <button onClick={handleShowMoreResults} disabled={returnEndOfResults()} ref={btnRef} >
                        {returnEndOfResults() ? "No more to show!" : "Show More"}
                    </button>
                }
            </ul>
        </>
    )
}