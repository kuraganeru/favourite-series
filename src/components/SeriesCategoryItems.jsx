import SeriesItem from "./SeriesItem"

export default function SeriesCategoryItems({series, clickedSeries, onSetClickedSeriesChange, handleRemoveSeries}) {
    return (
        <>
            {series && series.map(oneSeries => (
                <SeriesItem 
                    oneSeries={oneSeries} 
                    key={oneSeries.id} 
                    clickedSeries={clickedSeries}
                    onSetClickedSeriesChange={onSetClickedSeriesChange}
                    handleRemoveSeries={handleRemoveSeries}
                />
            ))}
        </>
    )
}