import ExitTaskBtn from "./ExitTaskBtn.jsx";

export default function InputDateForm({ setInputDate, showInputDate, setShowInputDate }) {

    return (
        <div className="is-flex
                        is-flex-direction-row
                        align-items-center
                        is-justify-content-space-around
                        mt-2">
            <div>
                <input
                    className="input has-background-dark is-small is-flex-direction-column has-addons"
                    type="datetime-local"
                    onChange={(e) => setInputDate(e.target.value)}/>
                <p className="help m-0 mb-1 has-text-white">Please Input Date</p>
            </div>
            <div>
                <ExitTaskBtn
                    whichExitFunc={setShowInputDate}
                    whichExitVal={showInputDate}
                    setInputDate={setInputDate} />
            </div>
        </div>
    )
}
