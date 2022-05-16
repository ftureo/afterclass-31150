import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
      </div>
      <Routes>
        <Route path="/itemlistcontainer" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
