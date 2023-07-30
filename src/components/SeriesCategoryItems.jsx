import { useState } from "react"
import { SeriesItemDragging } from "./SeriesItemDragging";
import SeriesItem from "./SeriesItem"
import EditImageModal from "./EditImageModal";

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
            activationConstraint: { distance: 10 }
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

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

    return (
        <>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}>

                {series && series.length > 0 &&
                    <SortableContext items={series} strategy={horizontalListSortingStrategy}>
                        <section className="series-item-container">
                            {series.map(oneSeries => (
                                <SeriesItem
                                    oneSeries={oneSeries}
                                    key={oneSeries.id}
                                    clickedSeries={clickedSeries}
                                    onSetClickedSeriesChange={onSetClickedSeriesChange}
                                    handleRemoveSeries={handleRemoveSeries}
                                    onClickEditImage={openModal}
                                    modalIsOpen={modalIsOpen}
                                />
                            ))}
                        </section>
                    </SortableContext>
                }

                <DragOverlay>
                    {draggedSeries ? <SeriesItemDragging draggedSeries={draggedSeries} /> : null}
                </DragOverlay>
            </DndContext>
            <EditImageModal
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                clickedSeries={clickedSeries}
                handleSubmitImage={handleSubmitImage}
                newImage={newImage}
                setNewImage={setNewImage}
            />
        </>
    )

    function handleDragStart(event) {
        const { active } = event
        const foundSeries = series.filter(oneSeries => oneSeries.id === active.id)
        setDraggedSeries(foundSeries[0])
    }

    function handleDragEnd(event) {
        const { active, over } = event;

        if (active.id !== over.id) {
            setSeries((items) => {
                const oldIndex = items.findIndex(item => item.id === active.id);
                const newIndex = items.findIndex(item => item.id === over.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }
}