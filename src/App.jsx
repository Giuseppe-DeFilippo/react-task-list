// Mostriamo in due liste diverse gli elementi dell’array tasks.Nella prima lista mostriamo solo i task(title, priority e estimatedTime) che hanno stato “backlog” o “in_progress”. Nella seconda lista mostriamo i task che hanno stato “completed”.
// Infine riprodurre il layout lasciato in allegato.
import ElementsArrayComponents from "./components/ElementiArrayComponents.jsx";


function App() {
  //parte logica

  //parte html
  return (
    <>
      <ul>{ElementsArrayComponents()}</ul>
      <ul></ul>
    </>
  )
}

export default App;