export default function AddSeriesResults({ searchSeries, handleSetSeries }) {
    return (
        <>
            <h3>Search Results</h3>
            {
                searchSeries && searchSeries.map(oneSeries => {
                    return (
                        <img
                            src={`https://images.igdb.com/igdb/image/upload/t_thumb/${oneSeries.cover.image_id}.jpg`}
                            onClick={() => handleSetSeries(oneSeries)}
                            key={oneSeries.id}
                        />
                    )
                })
            }
        </>
    )
}