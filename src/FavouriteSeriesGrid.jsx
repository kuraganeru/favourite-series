import SeriesCategoryHeader from "./components/SeriesCategoryHeader"
import SeriesCategory from "./components/SeriesCategory"
import AddSeries from "./components/AddSeries"
import { useEffect, useState } from "react"

function App() {
  const [categoryName, setCategoryName] = useState("My Category!")
  const [editCategoryName, setEditCategoryName] = useState(false)
  const [clickedSeries, setClickedSeries] = useState(null)
  const [searchText, setSearchText] = useState("")
  const [searchSeries, setSearchSeries] = useState(null)
  const [series, setSeries] = useState([])
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

  function handleRemoveSeries(oneSeries) {
    let newSeries =[...series]
    let removeSeries = newSeries.filter(series => series.id !== oneSeries.id)
    setSeries(removeSeries)
  }

  useEffect(() => {
    if (series.length > 0) {
      window.localStorage.setItem("series", JSON.stringify(series))
    }
  }, [series])

  useEffect(() => {
    const getSeries = window.localStorage.getItem("series")
    setSeries(JSON.parse(getSeries))
  }, [])

  async function handleFetchData(searchValue) {
    if (!searchValue) {
      return
    }
    try {
      const fetchOptions = {
        method: "POST"
      }
      const responseData = await fetch(`http://localhost:5000/games/search/${searchValue}`, fetchOptions)
      setRequestLoading(true)

      if (!responseData.ok) {
        throw new Error("Request error")
      }
      const responseJSON = await responseData.json()
      const filtered = responseJSON.filter(responseItem => series.some(oneSeries => oneSeries.id !== responseItem.id))
      
      setSearchSeries(filtered.length > 0 ? filtered : responseJSON)
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
        handleRemoveSeries={handleRemoveSeries}
      />
    </>
  )
}

export default App
