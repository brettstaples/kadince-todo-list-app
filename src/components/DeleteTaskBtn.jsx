import * as constants from "../Constants.js";
export default function DeleteTaskBtn({ id, filterRef, fetchTasks }) {
    async function deleteTask(id) {
        await fetch(`${constants.hostingUrl}/api/delete/task`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,
            }),
        });

        fetchTasks(filterRef.current, false);
    }

    return (
        <div>
            <button className="delete is-large is-background-dark"
                    data-cy="task-cell-delete-button"
                    onClick={() => deleteTask(id)} />
        </div>
    );
}