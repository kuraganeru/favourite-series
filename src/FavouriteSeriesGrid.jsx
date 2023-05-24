import SeriesCategoryHeader from "./components/SeriesCategoryHeader"
import SeriesCategory from "./components/SeriesCategory"
import AddSeries from "./components/AddSeries"
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
  const [requestLoading, setRequestLoading] = useState(false)

  function handleSetClickedSeries(oneSeries, originalElement) {
    setClickedSeries({ ...oneSeries, originalElement })
  }

  function handleSetSeries(oneSeries) {
    let newSeries = [...series]
    if (newSeries.find(series => series.id === oneSeries.id)) {
      return;
    }
    newSeries.push(oneSeries)
    setSeries(newSeries)
    setSearchSeries(searchSeries.filter(searchItem => !newSeries.includes(searchItem) ))
  }

  async function handleFetchData() {
    try {
      const fetchOptions = {
        method: "POST"
      }
      const responseData = await fetch(`http://localhost:5000/games/search/${searchText}`, fetchOptions)
      setRequestLoading(true)

      if (!responseData.ok) {
        throw new Error("Request error")
      }
      const responseJSON = await responseData.json()
      setSearchSeries(responseJSON.filter(responseItem => series.some(oneSeries => oneSeries.id !== responseItem.id)))
    } catch (error) {
      console.error(`Error: ${error}`)
    } finally {
      console.log("Request completed")
      setRequestLoading(false)
    }
  }

  return (
    <>
      <SeriesCategoryHeader
        categoryName={categoryName}
        editCategoryName={editCategoryName}
        onSetEditCategoryNameChange={setEditCategoryName}
        onSetCategoryNameChange={setCategoryName}
      />

      {/* <AddSeries
        searchText={searchText}
        onSetSearchText={setSearchText}
        handleFetchData={handleFetchData}
        requestLoading={requestLoading}
        searchSeries={searchSeries}
        handleSetSeries={handleSetSeries}
      /> */}

      <SeriesCategory
        series={series}
        clickedSeries={clickedSeries}
        handleSetClickedSeries={handleSetClickedSeries}
        searchText={searchText}
        onSetSearchText={setSearchText}
        handleFetchData={handleFetchData}
        requestLoading={requestLoading}
        searchSeries={searchSeries}
        handleSetSeries={handleSetSeries}
        onSetSearchSeries={setSearchSeries}
      />
    </>
  )
}

export default App
