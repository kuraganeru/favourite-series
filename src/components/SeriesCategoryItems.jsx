import SeriesItem from "./SeriesItem"
import "./SeriesCategoryItems.css"

export default function SeriesCategoryItems({series}) {
    return (
        <div className="flex">
            {series.map(oneSeries => (
                <SeriesItem oneSeries={oneSeries} key={oneSeries.title} />
            ))}
        </div>
    )
}