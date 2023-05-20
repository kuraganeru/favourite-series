export default function SeriesIndex({ series, onSetClickedSeriesChange, clickedSeries }) {
    return (
        <ol>
            {series.map(oneSeries => (
                <li
                    onMouseEnter={() => onSetClickedSeriesChange(oneSeries, "li")}
                    onMouseLeave={() => onSetClickedSeriesChange(null)}
                    key={oneSeries.id}
                    className={`${clickedSeries?.originalElement !== "li" && clickedSeries?.id === oneSeries?.id ? "index-selected" : ''}`} 
                >
                    {oneSeries.name}
                </li>
            ))}
        </ol>
    )
}