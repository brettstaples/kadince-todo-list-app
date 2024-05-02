export default function DeadlineOutput({deadline, currentTime}) {
    return (
        <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
            {
                (deadline === null)
                    ? null
                    : (currentTime >=deadline.getTime())
                        ? (
                            <div>
                                <p className="has-text-danger">You FAILED!</p>
                            </div>
                        )
                        : (
                            <div>
                                <p className="has-text-success">You Still Have time</p>
                            </div>
                        )
            }
            <div>
                {
                    (deadline !== null)
                    && (
                        <div>
                            <p className="has-text-text mb-1">{deadline.toLocaleString()}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
