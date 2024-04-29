import * as constants from "./development_variables.js"
import { useEffect, useRef, useState } from "react";
import CreateNewTaskForm from "./components/CreateNewTaskForm.jsx";
import FilterTasksBtns from "./components/FilterTasksBtns.jsx";
import ListCell from "./components/ListCell.jsx";

function App() {
    const [taskList, setTaskList] = useState([]);
    const filterRef = useRef("all");
    const whichTaskEditRef = useRef(-1);

    useEffect(() => {
        fetchTasks(filterRef.current);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function fetchTasks(filter) {
        const res = await fetch(`${constants.hostingUrl}/api/select/all/tasks`);
        const tasksArr = await res.json();
        tasksArr.sort((firstDate, secondDate) => {
            return new Date(firstDate.timestamp) - new Date(secondDate.timestamp);
        });

        setTaskList(tasksArr.map((task) => {
            return <ListCell fetchTasks={fetchTasks} filter={filter} whichTaskEditRef={whichTaskEditRef} filterRef={filterRef} status={task.status} id={task.id} deadline={task.deadline} name={task.name} showDeadlineBoolean={task.showDeadline} key={task.id}/>;
        }));
    }

    return (
        <div>
            <div>
                <p>Todo List</p>
                <CreateNewTaskForm fetchTasks={fetchTasks} filterRef={filterRef} />
                <FilterTasksBtns fetchTasks={fetchTasks} filterRef={filterRef}/>
            </div>
            <div>
                <div>
                    {taskList}
                </div>
            </div>
        </div>
    );
}

export default App;
