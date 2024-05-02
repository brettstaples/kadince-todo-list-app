import * as constants from '../Constants.js';
import { useState } from "react";
import InputDateForm from "./InputDateForm.jsx";


export default function EditElementInput({ id,
                                           fetchTasks,
                                           filterRef,
                                           taskName,
                                           setTaskEditId,
                                           taskEditId,
                                           deadline,
                                           status,
                                           setLoading
                                         }) {
    const [inputName, setInputName] = useState(taskName);
    const [inputDate, setInputDate] = useState(undefined);
    const [removeDeadline, setRemoveDeadline] = useState(false);
    const [showInputDate, setShowInputDate] = useState(false);

    const editTask = async (e) => {
        e.preventDefault();
        const inputNameFormatted = inputName.trim();

        if (!inputNameFormatted || (showInputDate && inputDate === undefined)) {
            return;
        }

        const deadlineInput = (inputDate === null && deadline !== null && !removeDeadline) ? deadline : inputDate;
        setLoading(true);
        await fetch(`${constants.hostingUrl}/api/update/task`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: inputNameFormatted,
                id: id,
                deadline: deadlineInput ?? null,
                status: status,
            })
        });

        const newSet = taskEditId;
        newSet.delete(id);
        setTaskEditId(newSet);
        fetchTasks(filterRef.current);
    }

    return (
        <form onSubmit={editTask}>
            <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center mt-1">
                <input
                    className="editInput input is-primary px-4"
                    maxLength="255"
                    placeholder="Input Edit Please"
                    value={inputName}
                    onChange={(e) => {
                        setInputName(e.target.value)
                    }}/>
                <div className="editInput is-flex is-justify-content-start">
                    <p className="help m-0 mb-1 has-text-white pl-1">Please input task edits</p>
                </div>
            </div>
            {
                showInputDate
                    ? (
                        <div>
                            <InputDateForm
                                setInputDate={setInputDate}
                                showInputDate={showInputDate}
                                setShowInputDate={setShowInputDate} />
                        </div>
                    )
                    :
                    <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                        <p className="help has-text-white m-0 mb-1"><u>Deadline Option(s)</u></p>
                        <div className="is-flex is-flex-direction-row is-justify-content-center is-align-items-center">
                            <div>
                                <button type="button"
                                        className="deadline button is-small is-rounded mr-1 mb-2"
                                        onClick={() => setShowInputDate(true)}>Change?
                                </button>
                            </div>
                            {
                                !removeDeadline
                                && (deadline !== null)
                                &&
                                (
                                    <button type="button"
                                            className="deadline button is-rounded is-small mb-2"
                                            onClick={() => {
                                                setRemoveDeadline(true)
                                            }
                                            }>Remove?</button>
                                )
                            }

                        </div>
                    </div>
            }
            <div className="is-flex is-justify-content-center">
                <button type="submit" className="button is-primary is-rounded is-dark mt-1 mb-1 is-normal">Input Edits
                </button>
            </div>
        </form>
    )
}
