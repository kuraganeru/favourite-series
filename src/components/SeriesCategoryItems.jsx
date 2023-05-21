import SeriesItem from "./SeriesItem"

export default function SeriesCategoryItems({series, clickedSeries, onSetClickedSeriesChange}) {
    return (
        <>
            {series.map(oneSeries => (
                <SeriesItem 
                    oneSeries={oneSeries} 
                    key={oneSeries.id} 
                    clickedSeries={clickedSeries}
                    onSetClickedSeriesChange={onSetClickedSeriesChange}
                />
            ))}
        </>
    )
}