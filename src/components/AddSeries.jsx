import AddSeriesSearch from "./AddSeriesSearch"
import AddSeriesResults from "./AddSeriesResults"
import AddSeriesLoading from "./AddSeriesLoading"

export default function AddSeries({ searchText, onSetSearchText, searchSeries, handleSetSeries, handleFetchData, requestLoading }) {
    return (
        <div className="container">
            <AddSeriesSearch
                searchText={searchText}
                onSetSearchText={onSetSearchText}
                handleFetchData={handleFetchData}
            />

            <AddSeriesLoading 
                requestLoading={requestLoading}
            />

            <AddSeriesResults
                searchSeries={searchSeries}
                handleSetSeries={handleSetSeries}
            />
        </div>
    )
}