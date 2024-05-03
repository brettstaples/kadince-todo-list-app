export default function EditTaskbtn({ id, setTaskEditId, taskEditId, setRerender, rerender }) {
    async function addEditInput(id) {
        const newSet = taskEditId;
        newSet.add(id);
        setTaskEditId(newSet);
        setRerender(!rerender);
    }

    return (
        <div>
            <button className="button px-4 py-2 is-small is-primary is-dark"
                    data-cy="task-cell-edit-button"
                    onClick={() => addEditInput(id)}>Edit</button>
        </div>
    );
}
