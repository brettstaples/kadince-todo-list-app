import * as constants from "../Constants.js"
import { useState } from "react";
import InputDateForm from "./InputDateForm.jsx";

export default function CreateTaskForm({ fetchTasks, filterRef, setLoading }) {
    const [inputName, setNameInput] = useState("");
    const [inputDate, setInputDate] = useState(undefined);
    const [showInputDate, setShowInputDate] = useState(false);

    function showDateInput() {
        setShowInputDate(true);
    }

    const createNewTask = async (e) => {
        e.preventDefault();
        const inputNameFormatted = inputName.trim();

        if (!inputNameFormatted || (showInputDate && inputDate === undefined)) {
            return;
        }

        setNameInput("");
        setLoading(true);
        const dateInput = showInputDate ? inputDate : null;
        await fetch(`${constants.hostingUrl}/api/create/task`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: inputNameFormatted,
                deadline: dateInput,
            }),
        });

        setShowInputDate(false);
        setInputDate(null);
        fetchTasks(filterRef.current);
    }

    return (
        <form onSubmit={createNewTask} className="field">
            <div>
                <div className="has-text-centered pr-1">
                    <p className="title is-2 mb-1">Todo List</p>
                </div>
                <div className="control">
                    <input
                        className="input is-primary has-text-centered px-4"
                        maxLength="255"
                        type="text"
                        placeholder="Ex. Do Math"
                        value={inputName}
                        onChange={(e) => setNameInput(e.target.value)}/>
                </div>
                <p className="help m-0 has-text-white">Please input task name</p>
            </div>
            <div>
                {
                    showInputDate
                        ? (
                            <InputDateForm setInputDate={setInputDate} showInputDate={showInputDate} setShowInputDate={setShowInputDate} />
                        )
                        : (
                            <div className="is-flex is-justify-content-center my-2">
                                <button type="button" className="deadline button is-small is-rounded" onClick={() => showDateInput()}>Set Deadline?</button>
                            </div>
                        )
                }
            </div>
            <div className="is-flex is-justify-content-center">
                <button type="submit" className="button is-primary is-rounded is-dark mt-1 mb-1 is-normal">Input Task</button>
            </div>
        </form>
    );
}
