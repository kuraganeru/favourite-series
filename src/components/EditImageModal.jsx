import ReactModal from "react-modal"

export default function EditImageModal({modalIsOpen, closeModal, clickedSeries, handleSubmitImage, newImage, setNewImage}) {
    const modalStyles = {
        content: {
            maxHeight: "400px",
            left: "50%",
            transform: "translate(-50%)",
            width: "60%",
            padding: "40px"
        }
    }

    ReactModal.setAppElement('#root');

    return (
        <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Edit Series Image"
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
    )
}