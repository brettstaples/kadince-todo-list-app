import * as constants from "../Constants.js"
export default function Filter({ makeTaskList, filterRef, databaseTaskList }) {
    return (
        <div className="buttons has-addons is-centered">
            <button className={
                                (filterRef.current === constants.inProgress)
                                    ? "button is-small is-link is-dark is-inverted px-2"
                                    : "button is-small is-link is-dark is-outlined px-2"
                            }
                    onClick={() => {
                        filterRef.current = "in progress";
                        makeTaskList(filterRef.current, databaseTaskList);
                    }}>in progress
            </button>
            <button className={
                                (filterRef.current === constants.all)
                                    ? "button is-small is-link is-dark is-inverted px-5"
                                    : "button is-small is-link is-dark is-outlined px-5"
                            }
                    onClick={() => {
                        filterRef.current = "all";
                        makeTaskList(filterRef.current, databaseTaskList);
                    }}>all
            </button>
            <button className={
                                (filterRef.current === constants.finished)
                                    ? "button is-small is-link is-dark is-inverted px-4"
                                    : "button is-small is-link is-dark is-outlined px-4"
                            }
                    onClick={() => {
                        filterRef.current = "finished";
                        makeTaskList(filterRef.current, databaseTaskList);
                    }}>finished
            </button>
        </div>
    );
}
