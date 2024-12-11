//  Nella seconda lista mostriamo i task che hanno stato “completed”.
// Infine riprodurre il layout lasciato in allegato.
import ElementsArrayComponents from "./components/ElementiArrayComponents.jsx";
import ElementiArrayCompletedComponents from "./components/ElementiArrayCompletedComponents.jsx";


function App() {
  //parte logica

  //parte html
  return (
    <>
      <div className="">
        <h1 className="p-2 backgroundgreen">task Manager</h1>
        <h3 className="">current task(4)</h3>
        <ul className="">{ElementsArrayComponents()}</ul>
        <hr className="" />
        <h3 className="">Completed Task(6)</h3>
        <ul className="">{ElementiArrayCompletedComponents()}</ul>
      </div>
    </>
  )
}

export default App;