import * as constants from "../Constants.js";

export default function ChangeDeadlineOutputBtn({fetchTasks, showDeadlineBoolean, filterRef, id}) {
    async function deadlineOutputChange() {
        await fetch(`${constants.hostingUrl}/api/update/deadline`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                showDeadlineBoolean: !showDeadlineBoolean,
                id: id
            })
        });

        fetchTasks(filterRef.current);
    }

    return (
        <div className="is-flex is-justify-content-center">
            <button className="button is-small is-rounded is-link is-dark is-outlined"
                    onClick={deadlineOutputChange}>{ showDeadlineBoolean
                                                        ? constants.hideDeadline
                                                        : constants.showDeadline
                                                    }</button>
        </div>
    );
}