export default function ExitTaskBtn({ whichExitFunc, whichExitVal, setInputDate, id }) {
    function handleClick() {
        if (whichExitVal.toString() !== "true") {
            const newSet = whichExitVal;
            newSet.delete(id);
            whichExitFunc(newSet);
        } else {
            whichExitFunc(false);
        }

        if (setInputDate !== undefined) {
            setInputDate(null);
        }

    }

    return (
            <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                <button type="button" className="delete is-large is-background-dark"
                        onClick={() => handleClick()}></button>
            </div>
        )
}
