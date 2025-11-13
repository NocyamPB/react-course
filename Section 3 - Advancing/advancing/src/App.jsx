import Cave from "./assets/crystal-cave.jpg";
import './App.css';
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";

function App() {

  return (
    <div>
      <h1>Avançando em React</h1>
      <div>
        {/* Imagem em public */}
        <img src="/magic-tree.jpeg" alt="Big magical tree with glowing orbs around." />
      </div>

      <div>
        {/* Imagem em assets */}
        <img src={Cave} alt="Crystal cave." />
      </div>

        <ManageData />
        <ListRender />
    </div>
  )
}

export default App
