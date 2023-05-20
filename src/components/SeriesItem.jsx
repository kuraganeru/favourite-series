import "./SeriesItem.css"

export default function SeriesItem({ oneSeries, clickedSeries, onSetClickedSeriesChange }) {
    return (
        <div key={oneSeries.id}>
            <img 
                className={`image ${clickedSeries?.originalElement !== "img" && clickedSeries?.id === oneSeries?.id && "img-selected"}`} 
                src={oneSeries.image} 
                alt={oneSeries.title}
                onMouseEnter={(ev) => onSetClickedSeriesChange(oneSeries, "img")}
                onMouseLeave={() => onSetClickedSeriesChange(null)}
            />
        </div>
    )
}