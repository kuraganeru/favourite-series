import AddSeriesResult from "./AddSeriesResult"
export default function AddSeriesResults({ searchSeries, handleSetSeries }) {
    return (
        <>
            <h3>Search Results</h3>
            <div className="add-series-results">
                {
                    searchSeries && searchSeries.map(oneSeries => {
                        return (
                            <AddSeriesResult oneSeries={oneSeries} />
                        )
                    })
                }
            </div>
        </>
    )
}