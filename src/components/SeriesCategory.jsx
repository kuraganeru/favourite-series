export default function SeriesCategory({series}) {
    return (
        <>
            {series.map(oneSeries => (
                <div key={oneSeries.id}>
                    <img src={oneSeries.image} alt={oneSeries.title} />
                </div>
            ))}
        </>
    )
}