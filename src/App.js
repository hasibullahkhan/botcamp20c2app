import Header from "./Components/Header"
import About from "./Components/About"
function App() {
  return (
    <div>
      <Header no={2} desc={"This Example Shows how to pass data from Parent component to Child Component"} />
      <About name={"Hasibullah Khan"} roll={"PIAIC136229"} city={"Karchi"} gender={"Male"} email={"haisbpak@gmail.com"} batch={"Batch 34"} />

    </div>
  );
}

export default App;
