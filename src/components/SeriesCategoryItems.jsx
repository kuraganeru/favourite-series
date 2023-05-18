import SeriesItem from "./SeriesItem"

export default function SeriesCategoryItems({series}) {
    return (
        <>
            {series.map(oneSeries => (
                <SeriesItem oneSeries={oneSeries} key={oneSeries.title} />
            ))}
        </>
    )
}