import SeriesIndex from "./SeriesIndex"
import SeriesCategoryItems from "./SeriesCategoryItems"
import AddList from "./AddList"

export default function SeriesCategory({ series, clickedSeries, handleSetClickedSeries, searchText, onSetSearchText, searchSeries, handleSetSeries, handleFetchData, requestLoading, onSetSearchSeries, handleRemoveSeries }) {
    return (
        <main className="container">
            <div className="grid">
                <section className="series-item-container">
                    <SeriesCategoryItems
                        series={series}
                        clickedSeries={clickedSeries}
                        onSetClickedSeriesChange={handleSetClickedSeries}
                        handleRemoveSeries={handleRemoveSeries}
                    />
                </section>
                <aside>
                    <div>
                        <AddList
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
                            onSetClickedSeriesChange={handleSetClickedSeries}
                            clickedSeries={clickedSeries}
                        />
                    </div>
                </aside>
            </div>
        </main>
    )
}