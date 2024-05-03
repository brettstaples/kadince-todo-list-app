import * as constants from "../Constants.js"
import EditTaskBtn from "./EditTaskBtn.jsx";
import DeleteTaskBtn from "./DeleteTaskBtn.jsx";
import ChangeTaskProgressBtn from "./ChangeTaskProgressBtn.jsx";
import EditTaskForm from "./EditTaskForm.jsx";
import ExitTaskBtn from "./ExitTaskBtn.jsx";
import DeadlineOutput from "./DeadlineOutput.jsx";
import ChangeDatesOutputBtn from "./ChangeDatesOutputBtn.jsx";
import { useState } from "react";
import DateCompletedOutput from "./DateCompletedOutput.jsx";

export default function Cell({
                                 fetchTasks,
                                 filter,
                                 filterRef,
                                 status,
                                 id,
                                 deadline,
                                 name,
                                 showDatesBoolean,
                                 dateCompleted,
                                 setTaskEditId,
                                 taskEditId
                                }) {
    const [rerender, setRerender] = useState();
    const isDateCompleted = new Date(dateCompleted);
    const changeValue = `${(status === constants.inProgress) ? constants.finished : constants.inProgress}?`;
    const deadlineDate = (deadline === null) ? deadline : new Date(deadline);
    if (filter !== "all" && status !== filter) {
        return null;
    }

    return (
        <div className="cell" data-cy="task-cell">
            <div>
                {
                    taskEditId.has(id)
                        ? (
                            <ExitTaskBtn
                                whichExitFunc={setTaskEditId}
                                whichExitVal={taskEditId}
                                id={id}
                                setRerender={setRerender}
                                rerender={rerender} />
                        )
                        : (
                            <div className="is-flex
                                            is-flex-direction-row
                                            is-justify-content-space-evenly
                                            is-align-items-center">
                                <DeleteTaskBtn
                                    id={id}
                                    filterRef={filterRef}
                                    fetchTasks={fetchTasks} />
                                <ChangeTaskProgressBtn
                                    id={id}
                                    status={status}
                                    filterRef={filterRef}
                                    fetchTasks={fetchTasks}
                                    value={changeValue}
                                    showDatesBoolean={showDatesBoolean}
                                    dateCompleted={dateCompleted} />
                                <EditTaskBtn
                                    id={id}
                                    taskEditId={taskEditId}
                                    setTaskEditId={setTaskEditId}
                                    setRerender={setRerender}
                                    rerender={rerender} />
                            </div>
                        )
                }
            </div>
            <div className="box m-0 py-4 is-flex is-flex-direction-column">
                <div>
                    <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                        <p className="has-text-primary has-text-centered" data-cy="task-cell-name">{name}</p>
                        <p className="has-text-warning">{status}</p>
                        {
                            (deadline && dateCompleted)
                                ? (isDateCompleted.getTime() >= deadlineDate.getTime())
                                    ? <p className="has-text-danger">Completed Late</p>
                                    : <p className="has-text-success">Completed on time</p>
                                : showDatesBoolean && <DeadlineOutput deadline={deadlineDate} />
                        }
                        {
                            showDatesBoolean
                            && dateCompleted
                            && (
                                <div
                                    className="is-flex
                                               is-flex-direction-column
                                               is-justify-content-center
                                               is-align-items-center">
                                    <DateCompletedOutput isDateCompleted={isDateCompleted} deadline={deadline} />
                                    <DeadlineOutput deadline={deadlineDate} />
                                </div>
                            )
                        }
                    </div>
                    {
                        (deadlineDate !== null && !taskEditId.has(id))
                        && (
                            <div>
                                <ChangeDatesOutputBtn
                                    fetchTasks={fetchTasks}
                                    showDatesBoolean={showDatesBoolean}
                                    filterRef={filterRef}
                                    id={id} />
                            </div>
                        )
                    }
                </div>
                <div>
                    {
                        taskEditId.has(id)
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
                                    status={status} />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
