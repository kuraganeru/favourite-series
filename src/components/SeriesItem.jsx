export default function SeriesItem({ oneSeries, clickedSeries, onSetClickedSeriesChange, handleRemoveSeries }) {
    return (
        <div>
            <img 
                className={`image ${clickedSeries?.originalElement !== "img" && clickedSeries?.id === oneSeries?.id ? "img-selected" : ""}`} 
                src={`https://images.igdb.com/igdb/image/upload/t_thumb_2x/${oneSeries.cover.image_id}.jpg`} 
                alt={oneSeries.title}
                onMouseEnter={() => onSetClickedSeriesChange(oneSeries, "img")}
                onMouseLeave={() => onSetClickedSeriesChange(null)}
            />
        </div>
    )
}