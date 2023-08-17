import Board from "./components/Board/board";
import DeleteModal from "./components/Modals/deleteModal";

function App() {
  return (
    <div className="App">
      <div className="container">
        <DeleteModal />
        <Board />
      </div>
    </div>
  );
}

export default App;
