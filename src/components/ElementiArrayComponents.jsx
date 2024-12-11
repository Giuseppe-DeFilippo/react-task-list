// Nella prima lista mostriamo solo i task(title, priority e estimatedTime) che hanno stato “backlog” o “in_progress”
import tasks from "../elementi.js";
function ElementsArrayComponents() {

    const SearchTitle = tasks.filter((element) => element.state === "backlog" || element.state === "in_progress")
        .map((taskDaRidurre) => {
            return (
                <>

                    <li className="fw-bold">{taskDaRidurre.title}<span className="badge  p-2 colorOrange">{taskDaRidurre.state}</span></li>
                    <li><span>priority: </span>{taskDaRidurre.priority}</li>
                    <li><span>Est. time </span>{taskDaRidurre.estimatedTime}</li>
                </>
            )
        })
    return SearchTitle;

}


export default ElementsArrayComponents;