import SeriesCategoryHeader from "./components/SeriesCategoryHeader"
import SeriesCategory from "./components/SeriesCategory"
import { useEffect, useState } from "react"

function App() {
  const [categoryName, setCategoryName] = useState("My Category!")
  const [editCategoryName, setEditCategoryName] = useState(false)
  const [clickedSeries, setClickedSeries] = useState(null)
  const [searchText, setSearchText] = useState("")
  const [searchSeries, setSearchSeries] = useState([])
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
    newSeries.push({...oneSeries, img_url: `https://images.igdb.com/igdb/image/upload/t_thumb_2x/${oneSeries.cover.image_id}.jpg`})
    setSeries(newSeries)
    setSearchSeries(searchSeries.filter(searchItem => !newSeries.includes(searchItem) ))
  }

  function handleRemoveSeries(oneSeries) {
    let newSeries =[...series]
    let removeSeries = newSeries.filter(series => series.id !== oneSeries.id)
    setSeries(removeSeries)
  }

  useEffect(() => {
    if (clickedSeries || series.length > 0) { 
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
      setRequestLoading(true)
      const fetchOptions = {
        method: "POST"
      }
      const responseData = await fetch(`http://localhost:5000/games/search/${searchValue}`, fetchOptions)

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

  function handleEditSeriesImage(newImage) {
    const updatedSeries = series.map(oneSeries => {
      return oneSeries.id === clickedSeries.id ? {...oneSeries, img_url: newImage} : oneSeries
    })
    setSeries(updatedSeries)
    console.log(updatedSeries)
  }

  return (
    <>
      <SeriesCategoryHeader
        categoryName={categoryName}
        editCategoryName={editCategoryName}
        onSetEditCategoryNameChange={setEditCategoryName}
        onSetCategoryNameChange={setCategoryName}
      />

      <SeriesCategory
        series={series}
        setSeries={setSeries}
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
        handleEditSeriesImage={handleEditSeriesImage}
      />
    </>
  )
}

export default App
