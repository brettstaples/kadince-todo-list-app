export default function EditTaskbutton({id, whichTaskEditRef, fetchTasks, filterRef}) {
    async function addEditInput(id) {
        whichTaskEditRef.current = id;
        fetchTasks(filterRef.current);
    }

    return <button onClick={() => addEditInput(id)}>Edit</button>;
}
