export default function SeriesIndex({series}) {
    return (
        <ol>
            {series.map(oneSeries => (
                <li key={oneSeries.title}>{oneSeries.title}</li>
            ))}
        </ol>
    )
}