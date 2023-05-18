import SeriesIndex from "./SeriesIndex"
import SeriesCategoryItems from "./SeriesCategoryItems"
import "./SeriesCategory.css"

export default function SeriesCategory({series}) {
    return (
        <div className="series-category">
            <SeriesCategoryItems series={series} />
            <SeriesIndex series={series} />
        </div>
    )
}