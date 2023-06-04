import { useSortable } from '@dnd-kit/sortable'
import { SeriesItemDragging } from './SeriesItemDragging';

export default function SeriesItem({ oneSeries, clickedSeries, onSetClickedSeriesChange, handleRemoveSeries, onClickEditImage }) {
    const {
        attributes,
        listeners,
        setNodeRef,
    } = useSortable({ 
        id: oneSeries.id,
        attributes: {
            role: "image"
        }
    });
    
    return (
        <SeriesItemDragging 
            ref={setNodeRef} 
            {...attributes} 
            {...listeners} 
            oneSeries={oneSeries} 
            clickedSeries={clickedSeries} 
            onSetClickedSeriesChange={onSetClickedSeriesChange}
            handleRemoveSeries={handleRemoveSeries}
            onClickEditImage={onClickEditImage}
        />
    )
}