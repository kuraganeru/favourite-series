export default function SeriesIndex({ series, onSetClickedSeriesChange, clickedSeries }) {
    return (
        <ol>
            {series.map(oneSeries => (
                <li
                    onMouseEnter={() => onSetClickedSeriesChange(oneSeries, "li")}
                    onMouseLeave={() => onSetClickedSeriesChange(null)}
                    key={oneSeries.title}
                    className={`${clickedSeries?.originalElement !== "li" && clickedSeries?.id === oneSeries?.id ? "index-selected" : ''}`} 
                >
                    {oneSeries.title}
                </li>
            ))}
        </ol>
    )
}