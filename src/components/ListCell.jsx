import EditTaskBtn from "./EditTaskBtn.jsx";
import DeleteTaskBtn from "./DeleteTaskBtn.jsx";
import ChangeTaskProgressBtn from "./ChangeTaskProgressBtn.jsx";
import EditTaskForm from "./EditTaskForm.jsx";
import ExitTaskBtn from "./ExitTaskBtn.jsx";
import DeadlineOutput from "./DeadlineOutput.jsx";
import { useEffect, useState } from "react";
import { ChangeDeadlineOutputBtn } from "./ChangeDeadlineOutputBtn.jsx";

const finished = "finished";
const inProgress = "in progress";

export default function Cell({fetchTasks, filter, whichTaskEditRef, filterRef, status, id, deadline, name, showDeadlineBoolean}) {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        setTimeout(() => setCurrentTime(new Date()), 1000)
    }, [currentTime]);

    let changeValue = (status === inProgress) ? `${finished}?` : `${inProgress}?`;
    let deadlineDate = (deadline === null) ? null : new Date(deadline);
    if ((filter !== "all" && status !== filter)) {
        return <></>;
    } else {
        return (
            <div>
                {whichTaskEditRef.current === id ?
                    <ExitTaskBtn whichExit={whichTaskEditRef} fetchTasks={fetchTasks} filter={filter} />
                    : (
                        <div>
                            <DeleteTaskBtn id={id} filterRef={filterRef} fetchTasks={fetchTasks} whichTaskEditRef={whichTaskEditRef}/>
                            <ChangeTaskProgressBtn id={id} status={status} filterRef={filterRef} fetchTasks={fetchTasks} value={changeValue} showDeadlineBoolean={showDeadlineBoolean}/>
                            <EditTaskBtn id={id} whichTaskEditRef={whichTaskEditRef} fetchTasks={fetchTasks} filterRef={filterRef} />
                        </div>
                    )}
                <div>
                    <p>{name}</p>
                    <p>{status}</p>
                    {showDeadlineBoolean ? <DeadlineOutput deadline={deadlineDate} currentTime={currentTime}/>
                    : null
                    }
                </div>
                {deadlineDate !== null ? <ChangeDeadlineOutputBtn fetchTasks={fetchTasks} showDeadlineBoolean={showDeadlineBoolean} filterRef={filterRef} id={id}/>
                    : <></>
                 }
                {whichTaskEditRef.current !== id ?
                    <></>
                    : <EditTaskForm id={id} fetchTasks={fetchTasks} filterRef={filterRef} taskName={name} whichTaskEditRef={whichTaskEditRef}/>}
            </div>
        )
    }
}
