export default function SeriesItem({ oneSeries }) {
    return (
        <div key={oneSeries.id}>
            <img src={oneSeries.image} alt={oneSeries.title} />
        </div>
    )
}