export default function EditTaskbtn({ id, setTaskEditId, taskEditId }) {
    async function addEditInput(id) {
        const newSet = taskEditId;
        newSet.add(id);
        setTaskEditId(newSet);
    }

    return (
        <div>
            <button className="button px-4 py-2 is-small is-primary is-dark" onClick={() => addEditInput(id)}>Edit</button>
        </div>
    );
}
