import * as constants from "../development_variables.js"
import { useRef, useState } from "react";
import InputDateForm from "./InputDateForm.jsx";
import ExitTaskBtn from "./ExitTaskBtn";

export default function CreateTaskForm({fetchTasks, filterRef}) {
    const [inputName, setNameInput] = useState("");
    const [inputDate, setDateInput] = useState(undefined);
    const inputDateRef = useRef(false);

    function showDateInput() {
        inputDateRef.current = true;
        fetchTasks(filterRef.current);
    }

    const createNewTask = async (e) => {
        e.preventDefault();
        let inputNameFormatted = inputName.trim();

        if (!inputNameFormatted || (inputDateRef.current && inputDate === undefined)) {
            return;
        }

        setNameInput("");
        const dateInput = (inputDateRef.current) ? inputDate : null;
        await fetch(`${constants.hostingUrl}/api/create/task`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: inputNameFormatted,
                deadline: dateInput,
            })
        });

        inputDateRef.current = false;
        setDateInput(null);
        fetchTasks(filterRef.current);
    }

    return (
        <form onSubmit={createNewTask}>
            <input
                maxLength="255"
                type="text"
                placeholder="Ex. Do Math"
                value={inputName}
                onChange={(e) => {setNameInput(e.target.value)}} />
            <div>
                <p>Please input task name</p>
                {inputDateRef.current ? (
                    <div>
                        <InputDateForm setDateInput={setDateInput}/>
                        <ExitTaskBtn whichExit={inputDateRef} fetchTasks={fetchTasks} filter={filterRef.current} />
                    </div>
                ) : <button type="button" onClick={() => showDateInput()} >Set Deadline?</button>}
            </div>
            <button  type="submit">Input Task</button>
        </form>
    )
}
