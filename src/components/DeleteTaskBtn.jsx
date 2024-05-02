import * as constants from "../Constants.js";
export default function DeleteTaskBtn({ id, filterRef, fetchTasks, setLoading }) {
    async function deleteTask(id) {
        setLoading(true)
        await fetch(`${constants.hostingUrl}/api/delete/task`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id
            })
        });

        fetchTasks(filterRef.current);
    }

    return (
        <div>
            <button className="delete is-large is-background-dark"
                    onClick={() => deleteTask(id)}></button>
        </div>
    );
}