import * as constants from "../Constants.js";

export default function ChangeDatesOutputBtn({ fetchTasks, showDatesBoolean, filterRef, id }) {
    async function deadlineOutputChange() {
        await fetch(`${constants.hostingUrl}/api/update/deadline`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                showDatesBoolean: !showDatesBoolean,
                id: id,
            }),
        });

        fetchTasks(filterRef.current, false);
    }

    return (
        <div className="is-flex is-justify-content-center">
            <button className="button is-small is-rounded is-link is-dark is-outlined mt-1"
                    onClick={deadlineOutputChange}>{ showDatesBoolean
                                                        ? constants.hideDates
                                                        : constants.showDates
                                                   }
            </button>
        </div>
    );
}