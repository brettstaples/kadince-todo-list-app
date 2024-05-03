import * as constants from "../Constants.js"

export default function ChangeTaskProgressBtn({ id, status, filterRef, fetchTasks, value, showDatesBoolean }) {

    async function changeProgress(id, status) {
        const whenDateCompleted = (status === constants.finished) ? null : Date.now();
        await fetch(`${constants.hostingUrl}/api/change/task/status`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,
                status: status,
                showDeadlineBoolean: showDatesBoolean,
                dateCompleted: whenDateCompleted,
            }),
        });

        fetchTasks(filterRef.current, false);
    }

    return (
            <button className="button px-3 py-2 is-small is-warning is-dark"
                    data-cy="task-cell-change-progress-button"
                    onClick={() => changeProgress(id, status)}>{value}</button>
    );
}
