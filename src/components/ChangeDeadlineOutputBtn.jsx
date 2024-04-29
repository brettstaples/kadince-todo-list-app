import * as constants from "../development_variables.js";

export function ChangeDeadlineOutputBtn({fetchTasks, showDeadlineBoolean, filterRef, id}) {
    async function deadlineOutputChange() {
        await fetch(`${constants.hostingUrl}/api/update/deadline`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                showDeadlineBoolean: !showDeadlineBoolean,
                id: id
            })
        });

        fetchTasks(filterRef.current);

    }

    let showDeadline = "Show Deadline?";
    let hideDeadline = "Hide Deadline?";
    return <button onClick={deadlineOutputChange}>{showDeadlineBoolean ? hideDeadline : showDeadline}</button>
}