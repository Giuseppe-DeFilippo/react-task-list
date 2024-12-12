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
        <h1 className="backgroundgreen p-2"><span className="m-3">task Manager</span></h1>
        <h3 className="ms-4">Current Task(4)</h3>
        <ul className=""><ElementsArrayComponents /></ul>
        <h3 className="ms-4 borderTop">Completed Task(6)</h3>
        <ul className=""><ElementiArrayCompletedComponents /></ul>
      </div>
    </>
  )
}

export default App;