export default function ExitTaskBtn({
                                        whichExitFunc,
                                        whichExitVal,
                                        setInputDate,
                                        id,
                                        setRerender,
                                        rerender,
                                        deadline
                                    }) {
    function handleClick() {
        if (whichExitVal.toString() !== "true") {
            const newSet = whichExitVal;
            newSet.delete(id);
            whichExitFunc(newSet);
        } else {
            whichExitFunc(false);
        }

        if (setInputDate !== undefined) {
            if (deadline === null) {
                setInputDate(null);
            }
        }

        if (setRerender !== undefined) {
            setRerender(!rerender);
        }
    }

    return (
            <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                <button type="button"
                        data-cy="new-task-exit-set-deadline-button"
                        className="delete is-large is-background-dark"
                        onClick={() => handleClick()} />
            </div>
        )
}
