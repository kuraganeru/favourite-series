import SeriesItem from "./SeriesItem"
import "./SeriesCategoryItems.css"

export default function SeriesCategoryItems({series, clickedSeries, onSetClickedSeriesChange}) {
    return (
        <div className="flex">
            {series.map(oneSeries => (
                <SeriesItem 
                    oneSeries={oneSeries} 
                    key={oneSeries.id} 
                    clickedSeries={clickedSeries}
                    onSetClickedSeriesChange={onSetClickedSeriesChange}
                />
            ))}
        </div>
    )
}