import SeriesCategoryItems from "./SeriesCategoryItems"

export default function SeriesCategory({ series, clickedSeries, handleSetClickedSeries, handleRemoveSeries, handleEditSeriesImage, setSeries }) {
    return (
        <>
            <SeriesCategoryItems
                series={series}
                setSeries={setSeries}
                clickedSeries={clickedSeries}
                onSetClickedSeriesChange={handleSetClickedSeries}
                handleRemoveSeries={handleRemoveSeries}
                handleEditSeriesImage={handleEditSeriesImage}
            />
        </>
    )
}