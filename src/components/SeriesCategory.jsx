import SeriesIndex from "./SeriesIndex"
import SeriesCategoryItems from "./SeriesCategoryItems"

export default function SeriesCategory({ series, clickedSeries, handleSetClickedSeries }) {
    return (
        <div className="grid">
            <section>
                <SeriesCategoryItems
                    series={series}
                    clickedSeries={clickedSeries}
                    onSetClickedSeriesChange={handleSetClickedSeries}
                />
            </section>
            <aside>
                <SeriesIndex
                    series={series}
                    onSetClickedSeriesChange={handleSetClickedSeries}
                    clickedSeries={clickedSeries}
                />
            </aside>
        </div>
    )
}