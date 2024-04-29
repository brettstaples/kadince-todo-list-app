import * as constants from "../development_variables.js"
export default function ChangeTaskProgressBtn({id, status, filterRef, fetchTasks, value, showDeadlineBoolean}) {
    async function changeProgress(id, status) {
        await fetch(`${constants.hostingUrl}/api/change/task/status`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id,
                status: status,
                showDeadlineBoolean: showDeadlineBoolean,
            })
        });

        fetchTasks(filterRef.current);
    }

    return <button onClick={() => changeProgress(id, status)}>{value}</button>;
}