import SeriesCategoryHeader from "./components/SeriesCategoryHeader"
import SeriesCategory from "./components/SeriesCategory"
import AddSeriesSearch from "./components/AddSeriesSearch"
import { useState } from "react"

function App() {
  const [categoryName, setCategoryName] = useState("My Category!")
  const [editCategoryName, setEditCategoryName] = useState(false)
  const [clickedSeries, setClickedSeries] = useState(null)

  const series = [{title: "Devil May Cry 3", image: "https://i.imgur.com/lBZNKyA.jpg", id: 1}, {title: "Dead Rising", image: "https://i.imgur.com/n2MJr5O.jpg", id: 2}, {title: "Nioh 2", image: "https://i0.wp.com/tryrolling.com/wp-content/uploads/2020/04/Nioh-2-Background.jpg?resize=150%2C150&ssl=1", id: 3}]

  function handleSetClickedSeries(oneSeries, originalElement) {
    setClickedSeries({...oneSeries, originalElement})
}

  return (
    <>
      <SeriesCategoryHeader 
        categoryName={categoryName} 
        editCategoryName={editCategoryName} 
        onSetEditCategoryNameChange={setEditCategoryName}
        onSetCategoryNameChange={setCategoryName}
        />
      <AddSeriesSearch />
      <SeriesCategory 
        series={series} 
        clickedSeries={clickedSeries}
        handleSetClickedSeries={handleSetClickedSeries}
        />
    </>
  )
}

export default App
