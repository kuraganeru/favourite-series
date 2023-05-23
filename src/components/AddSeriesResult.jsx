export default function AddSeriesResult({ oneSeries }) {
    return (
        <article>
            <img
                src={`https://images.igdb.com/igdb/image/upload/t_thumb/${oneSeries.cover.image_id}.jpg`}
                onClick={() => handleSetSeries(oneSeries)}
                key={oneSeries.id}
            />
            <span>{oneSeries.name}</span>
            <button>Add</button>
        </article>
    )
}