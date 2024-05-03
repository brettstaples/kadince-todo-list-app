export default function DeadlineOutput({ deadline }) {
    return (
        <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
            {
                (deadline !== null)
                    && (
                        <div className="
                                        is-flex
                                        is-flex-direction-column
                                        is-justify-content-center
                                        is-align-items-center">
                            <p className="help mt-1 mb-0"><u>Deadline</u></p>
                            <p className="has-text-text"
                               data-cy="task-cell-deadline-output">{deadline.toLocaleString()}</p>
                        </div>
                    )
            }
        </div>
    );
}
