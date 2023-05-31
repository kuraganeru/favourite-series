export default function SeriesItem({ oneSeries, clickedSeries, onSetClickedSeriesChange, handleRemoveSeries, onClickEditImage }) {
    return (
        <div
            onMouseEnter={() => onSetClickedSeriesChange(oneSeries, "img")}
            onMouseLeave={() => onSetClickedSeriesChange(null)}
        >
            <img
                className={`image ${clickedSeries?.originalElement !== "img" && clickedSeries?.id === oneSeries?.id ? "img-selected" : ""}`}
                src={oneSeries.img_url}
                alt={oneSeries.title}
                onClick={() => {onClickEditImage(oneSeries)}}
            />
            {clickedSeries?.id === oneSeries?.id ? <span onClick={() => handleRemoveSeries(oneSeries)}>✕</span> : null}
        </div>
    )
}