import SeriesCategoryHeader from "./components/SeriesCategoryHeader"
import SeriesCategory from "./components/SeriesCategory"
import AddNewSeriesSidebar from "./components/AddNewSeriesSidebar"
import Settings from "./components/Settings/Settings"
import { useEffect, useState } from "react"

function App() {
  const [categoryName, setCategoryName] = useState("My Category!")
  const [editCategoryName, setEditCategoryName] = useState(false)
  const [clickedSeries, setClickedSeries] = useState(null)
  const [searchText, setSearchText] = useState("")
  const [searchSeries, setSearchSeries] = useState([])
  const [series, setSeries] = useState([])
  const [requestLoading, setRequestLoading] = useState(false)
  const [bgColour, setBgColour] = useState('')
  const [fontColour, setFontColour] = useState('')
  const fontStyle = {color: fontColour}

  function handleSetClickedSeries(oneSeries, originalElement) {
    setClickedSeries({ ...oneSeries, originalElement })
  }

  function handleSetSeries(oneSeries) {
    
    let newSeries = series ? [...series] : []
    if (newSeries.find(series => series.id === oneSeries.id)) {
      return;
    }
    newSeries.push({ ...oneSeries, img_url: `https://images.igdb.com/igdb/image/upload/t_thumb_2x/${oneSeries.cover.image_id}.jpg` })
    setSeries(newSeries)
    setSearchSeries(searchSeries.filter(searchItem => !newSeries.includes(searchItem)))
  }

  function handleRemoveSeries(oneSeries) {
    let newSeries = [...series]
    let removeSeries = newSeries.filter(series => series.id !== oneSeries.id)
    setSeries(removeSeries)
  }

  useEffect(() => {
    if (clickedSeries || series && series.length > 0) {
      window.localStorage.setItem("series", JSON.stringify(series))
    }
  }, [series])

  useEffect(() => {
    const getSeries = window.localStorage.getItem("series")
    setSeries(JSON.parse(getSeries))
  }, [])

  // Save, set, update background color with localStorage
  useEffect(() => {
    if (!bgColour) return;
    window.localStorage.setItem("bgColour", bgColour)
  }, [bgColour])

  useEffect(() => {
    const getBgColour = window.localStorage.getItem("bgColour")
    setBgColour(getBgColour)
  })

  useEffect(() => {
    document.body.style.backgroundColor = bgColour
  }, [bgColour])

  // save, set, update font colour
  useEffect(() => {
    if (!fontColour) return;
    window.localStorage.setItem("fontColour", fontColour)
  }, [fontColour])

  useEffect(() => {
    const getFontColour = window.localStorage.getItem("fontColour")
    setFontColour(getFontColour)
  })
  

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
      return oneSeries.id === clickedSeries.id ? { ...oneSeries, img_url: newImage } : oneSeries
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
        fontStyle={fontStyle}
        bgColour={bgColour}
        fontColour={fontColour}
        setBgColour={setBgColour} 
        setFontColour={setFontColour}
      />

      <main className="container">
        <div className="grid">
          <SeriesCategory
            series={series}
            setSeries={setSeries}
            clickedSeries={clickedSeries}
            handleSetClickedSeries={handleSetClickedSeries}
            handleRemoveSeries={handleRemoveSeries}
            handleEditSeriesImage={handleEditSeriesImage}
          />
          <AddNewSeriesSidebar
            series={series}
            handleSetSeries={handleSetSeries}
            searchText={searchText}
            onSetSearchText={setSearchText}
            searchSeries={searchSeries}
            onSetSearchSeries={setSearchSeries}
            handleFetchData={handleFetchData}
            requestLoading={requestLoading}
            clickedSeries={clickedSeries}
            onSetClickedSeriesChange={handleSetClickedSeries}
            fontStyle={fontStyle}
          />
        </div>
      </main>
    </>
  )
}

export default App
