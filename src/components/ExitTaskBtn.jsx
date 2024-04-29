export default function ExitTaskBtn({ whichExit, fetchTasks, filter }) {
    function handleClick(filter) {
        if (whichExit.current.toString() !== "true") {
            whichExit.current = -1;
        } else {
            whichExit.current = false;
        }

        fetchTasks(filter);
    }

    return (
        <button type="button" onClick={() => handleClick(filter)}>Exit</button>
    )
}
