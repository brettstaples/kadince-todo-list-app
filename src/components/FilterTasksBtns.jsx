export default function Filter({fetchTasks, filterRef}) {
    return (
        <div>
            <button onClick={() => {filterRef.current = "all"; fetchTasks(filterRef.current);}}>all</button>
            <button onClick={() => {filterRef.current = "in progress"; fetchTasks(filterRef.current);}}>in progress</button>
            <button onClick={() => {filterRef.current = "finished"; fetchTasks(filterRef.current);}}>finished</button>
        </div>
    )
}