import { forwardRef } from 'react'

export const SeriesItemDragging = forwardRef(({ id, oneSeries, clickedSeries, onSetClickedSeriesChange, onClickEditImage, handleRemoveSeries, draggedSeries, modalIsOpen, ...props }, ref) => {
    const style = {
        opacity: 0.7
    }

    function checkModalIsOpenClickSeriesChange() {
        if (modalIsOpen) {
            return
        }
        onSetClickedSeriesChange(null)
    }
    return (
        <>
            {
                draggedSeries ? <img src={draggedSeries.img_url} style={style} /> : <div
                    {...props}
                    ref={ref}
                    onMouseEnter={() => onSetClickedSeriesChange(oneSeries, "img")}
                    onMouseLeave={checkModalIsOpenClickSeriesChange}
                >
                    <img
                        className={`image ${clickedSeries?.originalElement !== "img" && clickedSeries?.id === oneSeries?.id ? "img-selected" : ""}`}
                        src={oneSeries.img_url}
                        alt={oneSeries.title}
                        onClick={() => { onClickEditImage(oneSeries) }}
                    />
                    {clickedSeries?.id === oneSeries?.id && clickedSeries.originalElement === "img" ? <span onClick={() => handleRemoveSeries(oneSeries)}>✕</span> : null}
                </div>
            }
        </>
    )
})