import SeriesCategoryHeader from "./components/SeriesCategoryHeader"
import SeriesCategory from "./components/SeriesCategory"
import AddSeriesSearch from "./components/AddSeriesSearch"
import AddSeriesResults from "./components/AddSeriesResults"
import { useState } from "react"

function App() {
  const [categoryName, setCategoryName] = useState("My Category!")
  const [editCategoryName, setEditCategoryName] = useState(false)
  const [clickedSeries, setClickedSeries] = useState(null)
  const [searchText, setSearchText] = useState("")
  const [searchSeries, setSearchSeries] = useState(null)
  const [series, setSeries] = useState([{
    id: 103330,
    category: 0,
    cover: { id: 83563, image_id: 'co1sh7' },
    name: 'Nioh 2',
    platforms: [[Object], [Object]]
  }])

  function handleSetClickedSeries(oneSeries, originalElement) {
    setClickedSeries({ ...oneSeries, originalElement })
  }

  function handleSetSeries(oneSeries) {
    let newSeries = [...series]
    newSeries.push(oneSeries)
    setSeries(newSeries)
  }

  async function handleFetchData() {
    const responseData = await fetch(`http://localhost:5000/games/search/${searchText}`, {
      method: "POST"
    })
    const responseJSON = await responseData.json()
    setSearchSeries(responseJSON)
  }

  return (
    <>
      <button onClick={handleFetchData}>Click Me</button>
      <SeriesCategoryHeader
        categoryName={categoryName}
        editCategoryName={editCategoryName}
        onSetEditCategoryNameChange={setEditCategoryName}
        onSetCategoryNameChange={setCategoryName}
      />
      <AddSeriesSearch
        searchText={searchText}
        onSetSearchText={setSearchText}
      />
      <SeriesCategory
        series={series}
        clickedSeries={clickedSeries}
        handleSetClickedSeries={handleSetClickedSeries}
      />
    </>
  )
}

export default App
