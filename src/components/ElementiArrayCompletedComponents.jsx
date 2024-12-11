import tasks from "../elementi.js";
function elementiArrayCompleted() {
    const elementiCompleted = tasks.filter((element) => element.state === "completed").map((elemento) => {
        return (
            <>
                <li className="fw-bold">{elemento.title}<span className="badge ms-3 p-2 colorOrange">{elemento.state}</span></li>
                <li><span>priority: </span>{elemento.priority}</li>
                <li><span>Est. time </span>{elemento.estimatedTime}</li>
            </>
        )
    })
    return elementiCompleted;
}

export default elementiArrayCompleted;