import SeriesIndex from "./SeriesIndex"
import AddList from "./AddList"

export default function AddNewSeriesSidebar({series, handleSetSeries, searchText, onSetSearchText, searchSeries, onSetSearchSeries, handleFetchData, requestLoading, clickedSeries, onSetClickedSeriesChange, fontStyle}) {
    return (
        <aside>
            <div>
                <AddList
                    series={series}
                    searchText={searchText}
                    onSetSearchText={onSetSearchText}
                    searchSeries={searchSeries}
                    handleSetSeries={handleSetSeries}
                    handleFetchData={handleFetchData}
                    requestLoading={requestLoading}
                    onSetSearchSeries={onSetSearchSeries}
                />
            </div>
            <div>
                <SeriesIndex
                    series={series}
                    onSetClickedSeriesChange={onSetClickedSeriesChange}
                    clickedSeries={clickedSeries}
                    fontStyle={fontStyle}
                />
            </div>
        </aside>
    )
}