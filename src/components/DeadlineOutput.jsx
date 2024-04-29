export default function DeadlineOutput({deadline, currentTime}) {
    return (
        <div>
            {(deadline === null) ? null
                : (currentTime >=deadline.getTime()) ? (
                        <div>
                            <p className="has-text-danger">You FAILED!</p>
                        </div>)
                    : (
                        <div>
                            <p className="has-text-primary">You Still Have time</p>
                        </div>)
            }
            <div>
                {deadline !== null ? deadline.toLocaleString()
                    : null
                }
            </div>
        </div>
    )
}
