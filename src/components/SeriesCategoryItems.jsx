import SeriesItem from "./SeriesItem"
import ReactModal from "react-modal"
import { useState } from "react"

import { SeriesItemDragging } from "./SeriesItemDragging";

import {
    DndContext,
    DragOverlay,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    horizontalListSortingStrategy
} from '@dnd-kit/sortable';

export default function SeriesCategoryItems({ series, clickedSeries, onSetClickedSeriesChange, handleRemoveSeries, handleEditSeriesImage, setSeries }) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [newImage, setNewImage] = useState('')
    const [draggedSeries, setDraggedSeries] = useState(null)
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {distance: 10}
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );
    const modalStyles = {
        content: {
            maxHeight: "400px",
            left: "50%",
            transform: "translate(-50%)",
            width: "60%",
            padding: "40px"
        }
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        setNewImage('')
        onSetClickedSeriesChange(null)
    }

    function handleSubmitImage(e) {
        e.preventDefault()
        handleEditSeriesImage(newImage)
        closeModal()
    }

    ReactModal.setAppElement('#root');

    return (
        <>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}>

                <SortableContext items={series} strategy={horizontalListSortingStrategy}>
                    <section className="series-item-container">
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
                    </section>
                </SortableContext>

                <DragOverlay>
                    {draggedSeries ? <SeriesItemDragging draggedSeries={draggedSeries} /> : null}
                </DragOverlay>
            </DndContext>
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

    function handleDragStart(event) {
        const {active} = event
        const foundSeries = series.filter(oneSeries => oneSeries.id === active.id)
        setDraggedSeries(foundSeries[0])
    }

    function handleDragEnd(event) {
        const {active, over} = event;
        
        if (active.id !== over.id) {
            setSeries((items) => {
            const oldIndex = items.findIndex(item => item.id === active.id);
            const newIndex = items.findIndex(item => item.id === over.id);            
            return arrayMove(items, oldIndex, newIndex);
          });
        }
      }
}