import * as constants from "./Constants.js"
import { useEffect, useRef, useState } from "react";
import CreateNewTaskForm from "./components/CreateNewTaskForm.jsx";
import FilterTasksBtns from "./components/FilterTasksBtns.jsx";
import ListCell from "./components/ListCell.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";

function App() {
    const filterRef = useRef("all");
    const [taskList, setTaskList] = useState([]);
    const [databaseTaskList, setDatabaseTaskList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [taskEditId, setTaskEditId] = useState(new Set());

    useEffect(() => {
        fetchTasks(filterRef.current);
    }, []);

    async function fetchTasks(filter) {
        setLoading(true);
        const res = await fetch(`${constants.hostingUrl}/api/select/all/tasks`);
        const tasksArr = await res.json();
        tasksArr.sort((firstDate, secondDate) => {
            return new Date(firstDate.timestamp) - new Date(secondDate.timestamp);
        });

        setDatabaseTaskList(tasksArr);
        await makeTaskList(filter, tasksArr);
    }

    async function makeTaskList(filter, tasksArr) {
        setTaskList(tasksArr.map((task) => {
            return (
                    <ListCell
                        fetchTasks={fetchTasks}
                        filter={filter}
                        filterRef={filterRef}
                        status={task.status}
                        id={task.id}
                        deadline={task.deadline}
                        name={task.name}
                        showDeadlineBoolean={task.showDeadline}
                        setLoading={setLoading}
                        setTaskEditId={setTaskEditId}
                        taskEditId={taskEditId}
                        key={task.id} />
            );
        }));

        setLoading(false);
    }

    return (
        <div>
            <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                <div>
                    <CreateNewTaskForm
                        fetchTasks={fetchTasks}
                        filterRef={filterRef}
                        setLoading={setLoading}/>
                    <FilterTasksBtns
                        makeTaskList={makeTaskList}
                        filterRef={filterRef}
                        databaseTaskList={databaseTaskList}/>
                </div>
            </div>
                {
                    loading
                        ? (
                            <div className="is-flex
                                            is-justify-content-center
                                            is-align-items-center
                                            is-align-items-center">
                                <LoadingSpinner />
                            </div>
                        )
                        : (
                            <div className="fixed-grid
                                            has-2-cols-mobile
                                            has-3-cols-tablet
                                            has-4-cols-desktop
                                            has-5-cols-widescreen
                                            has-6-cols-fullhd">
                                <div className="grid p-2 m-2">
                                    {taskList}
                                </div>
                            </div>
                        )
                }
        </div>

    );
}

export default App;
