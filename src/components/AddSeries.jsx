import AddSeriesSearch from "./AddSeriesSearch"
import AddSeriesResults from "./AddSeriesResults"

export default function AddSeries({ searchText, onSetSearchText, searchSeries, handleSetSeries, handleFetchData, requestLoading }) {
    return (
        <div className="container">
            <AddSeriesSearch
                searchText={searchText}
                onSetSearchText={onSetSearchText}
                handleFetchData={handleFetchData}
                requestLoading={requestLoading}
            />

            <AddSeriesResults
                searchSeries={searchSeries}
                handleSetSeries={handleSetSeries}
            />
        </div>
    )
}