import SeriesIndex from "./SeriesIndex"
import SeriesCategoryItems from "./SeriesCategoryItems"
import "./SeriesCategory.css"

export default function SeriesCategory({series, clickedSeries, handleSetClickedSeries}) {
    return (
        <div className="series-category">
            <SeriesCategoryItems 
                series={series} 
                clickedSeries={clickedSeries} 
                onSetClickedSeriesChange={handleSetClickedSeries} 
            />
            <SeriesIndex 
                series={series} 
                onSetClickedSeriesChange={handleSetClickedSeries} 
                clickedSeries={clickedSeries} 
            />
        </div>
    )
}