import * as constants from "../Constants.js"
import EditTaskBtn from "./EditTaskBtn.jsx";
import DeleteTaskBtn from "./DeleteTaskBtn.jsx";
import ChangeTaskProgressBtn from "./ChangeTaskProgressBtn.jsx";
import EditTaskForm from "./EditTaskForm.jsx";
import ExitTaskBtn from "./ExitTaskBtn.jsx";
import DeadlineOutput from "./DeadlineOutput.jsx";
import ChangeDeadlineOutputBtn from "./ChangeDeadlineOutputBtn.jsx";
import {useEffect, useState} from "react";

export default function Cell({
                                 fetchTasks,
                                 filter,
                                 filterRef,
                                 status,
                                 id,
                                 deadline,
                                 name,
                                 showDeadlineBoolean,
                                 setLoading,
                                 setTaskEditId,
                                 taskEditId
                                }) {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        setTimeout(() => setCurrentTime(new Date()), 1000);
    }, [currentTime]);
    const changeValue = `${(status === constants.inProgress) ? constants.finished : constants.inProgress}?`;
    const deadlineDate = (deadline === null) ? deadline : new Date(deadline);
    if (filter !== "all" && status !== filter) {
        return null;

    }

    console.log(taskEditId);

    return (
        <div className="cell">
            <div>
                {
                    (taskEditId.has(id))
                        ? (
                                <ExitTaskBtn whichExitFunc={setTaskEditId}
                                             whichExitVal={taskEditId}
                                             id={id} />
                        )
                        : (
                            <div className="is-flex
                                            is-flex-direction-row
                                            is-justify-content-space-evenly
                                            is-align-items-center">
                                <DeleteTaskBtn
                                    id={id}
                                    filterRef={filterRef}
                                    fetchTasks={fetchTasks}
                                    setLoading={setLoading} />
                                <ChangeTaskProgressBtn
                                    id={id}
                                    status={status}
                                    filterRef={filterRef}
                                    fetchTasks={fetchTasks}
                                    value={changeValue}
                                    showDeadlineBoolean={showDeadlineBoolean}/>
                                <EditTaskBtn
                                    id={id}
                                    taskEditId={taskEditId}
                                    setTaskEditId={setTaskEditId}
                                    />
                            </div>
                        )
                }
            </div>
            <div className="box m-0 py-2 is-flex is-flex-direction-column">
                <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                    <p className="has-text-primary">{name}</p>
                    <p className="has-text-warning">{status}</p>
                </div>
                    {
                        showDeadlineBoolean
                        && (
                            <div>
                                <DeadlineOutput deadline={deadlineDate} currentTime={currentTime} />
                            </div>
                        )
                    }
                    {
                        (deadlineDate !== null && !taskEditId.has(id))
                        && (
                            <div>
                                <ChangeDeadlineOutputBtn
                                    fetchTasks={fetchTasks}
                                    showDeadlineBoolean={showDeadlineBoolean}
                                    filterRef={filterRef}
                                    id={id} />
                            </div>
                        )
                    }
            </div>
            <div>
                    {
                        (taskEditId.has(id))
                        && (
                            <div>
                                <EditTaskForm
                                    id={id}
                                    fetchTasks={fetchTasks}
                                    filterRef={filterRef}
                                    taskName={name}
                                    setTaskEditId={setTaskEditId}
                                    taskEditId={taskEditId}
                                    deadline={deadline}
                                    status={status}
                                    setLoading={setLoading}
                                    />
                            </div>
                        )
                    }
            </div>
        </div>
    );
}
