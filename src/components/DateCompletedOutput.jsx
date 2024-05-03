export default function DateCompletedOutput({ isDateCompleted, deadline }) {
    return (
        <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
            {
                (deadline !== null)
                && (
                    <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                        <p className="help mt-1 mb-0"><u>Date Completed</u></p>
                        <p className="m-0">{isDateCompleted.toLocaleString()}</p>
                    </div>
                )
            }
        </div>
    )
}