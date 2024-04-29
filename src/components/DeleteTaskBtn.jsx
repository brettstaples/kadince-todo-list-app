import * as constants from "../development_variables.js";
export default function DeleteTaskBtn({id, filterRef, fetchTasks, whichTaskEditRef}) {
    async function deleteTask(id) {
        await fetch(`${constants.hostingUrl}/api/delete/task`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id
            })
        });

        whichTaskEditRef.current = -1;
        fetchTasks(filterRef.current);
    }

    return <button  onClick={() => deleteTask(id)}>Delete</button>;
}