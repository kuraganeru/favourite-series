import SeriesItem from "./SeriesItem"
import ReactModal from "react-modal"
import { useState } from "react"

export default function SeriesCategoryItems({ series, clickedSeries, onSetClickedSeriesChange, handleRemoveSeries, handleEditSeriesImage }) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [newImage, setNewImage] = useState('')
    const modalStyles = {
        content: {
            maxHeight: "400px",
            left: "50%",
            transform: "translate(-50%)",
            width: "60%"
        }
    }

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
                style={modalStyles}
            >
                <h3>Editing {clickedSeries && clickedSeries.name}</h3>
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