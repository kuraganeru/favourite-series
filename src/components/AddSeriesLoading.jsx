export default function AddSeriesLoading({requestLoading}) {
    return (
        <>
            {requestLoading ? <p>Loading...</p> : null}
        </>
    )
}