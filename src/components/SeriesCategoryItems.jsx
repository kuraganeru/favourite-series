import SeriesItem from "./SeriesItem"
import ReactModal from "react-modal"
import { useState } from "react"

export default function SeriesCategoryItems({ series, clickedSeries, onSetClickedSeriesChange, handleRemoveSeries}) {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
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
            ></ReactModal>
        </>
    )
}