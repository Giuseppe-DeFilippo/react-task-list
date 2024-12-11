import tasks from "../elementi.js";
function elementiArrayCompleted() {
    const elementiCompleted = tasks.filter((element) => element.state === "completed").map((elemento) => {
        return (
            <>
                <li className="fw-bold">{elemento.title}</li>
                <li>{elemento.priority}</li>
                <li>{elemento.estimatedTime}</li>
            </>
        )
    })
    return elementiCompleted;
}

export default elementiArrayCompleted;