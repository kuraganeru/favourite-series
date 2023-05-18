import SeriesIndex from "./SeriesIndex"
import SeriesCategoryItems from "./SeriesCategoryItems"

export default function SeriesCategory({series}) {
    return (
        <>
            <SeriesCategoryItems series={series} />
            <SeriesIndex series={series} />
        </>
    )
}