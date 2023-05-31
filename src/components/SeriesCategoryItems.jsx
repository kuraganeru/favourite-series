import SeriesItem from "./SeriesItem"
import ReactModal from "react-modal"
import { useState } from "react"

export default function SeriesCategoryItems({ series, clickedSeries, onSetClickedSeriesChange, handleRemoveSeries, handleEditSeriesImage }) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [newImage, setNewImage] = useState('')

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleSubmitImage(e) {
        e.preventDefault()
        handleEditSeriesImage(newImage)
        closeModal()
    }

    ReactModal.setAppElement('#root');

    return (
        <>
            {series && series.map(oneSeries => (
                <SeriesItem
                    oneSeries={oneSeries}
                    key={oneSeries.id}
                    clickedSeries={clickedSeries}
                    onSetClickedSeriesChange={onSetClickedSeriesChange}
                    handleRemoveSeries={handleRemoveSeries}
                    onClickEditImage={openModal}
                />
            ))}
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <form onSubmit={handleSubmitImage}>
                    <input
                        type="text"
                        value={newImage}
                        placeholder="Enter an image URL"
                        onChange={e => setNewImage(e.target.value)}
                    />
                    <button>Submit</button>
                </form>
            </ReactModal>
        </>
    )
}