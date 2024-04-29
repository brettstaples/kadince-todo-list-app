import * as constants from '../development_variables.js';
import {useRef, useState} from "react";
import InputDateForm from "./InputDateForm.jsx";
import ExitTaskBtn from "./ExitTaskBtn.jsx";

export default function EditElementInput({id, fetchTasks, filterRef, taskName, whichTaskEditRef}) {
    const [inputName, setInputName] = useState(taskName);
    const [inputDate, setDateInput] = useState(undefined);
    const inputDateRef = useRef(false);

    console.log(inputDate);

    function showDateInput() {
        inputDateRef.current = true;
        fetchTasks(filterRef.current);
    }

    const editTask = async (e) => {
        e.preventDefault();
        let inputNameFormatted = inputName.trim();

        if (!inputNameFormatted || (inputDateRef.current && inputDate === undefined)) {
            return;
        }

        await fetch(`${constants.hostingUrl}/api/update/task`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: inputNameFormatted,
                id: id,
                deadline: inputDate ?? null,
            })
        });

        whichTaskEditRef.current = -1;
        fetchTasks(filterRef.current);
    }

    return (
        <form onSubmit={editTask}>
            <input
                maxLength="255"
                placeholder="Input Edit Please"
                value={inputName}
                onChange={(e) => {setInputName(e.target.value)}} />
            <p>Please input task edits</p>
            {inputDateRef.current ? (
                <div>
                    <InputDateForm setDateInput={setDateInput}/>
                    <ExitTaskBtn whichExit={inputDateRef} fetchTasks={fetchTasks} filter={filterRef.current} />
                </div>
            ) : <button type="button" onClick={() => showDateInput()} >Set Deadline?</button>}
            <button type="submit">Input</button>
        </form>
    )
}