//  Nella seconda lista mostriamo i task che hanno stato “completed”.
// Infine riprodurre il layout lasciato in allegato.
import ElementsArrayComponents from "./components/ElementiArrayComponents.jsx";
import ElementiArrayCompletedComponents from "./components/ElementiArrayCompletedComponents.jsx";


function App() {
  //parte logica

  //parte html
  return (
    <>
      <div className="container">
        <h1 className="">task Manager</h1>
        <h3>current task(4)</h3>
        <ul className="">{ElementsArrayComponents()}</ul>
        <ul className="">{ElementiArrayCompletedComponents()}</ul>
      </div>
    </>
  )
}

export default App;