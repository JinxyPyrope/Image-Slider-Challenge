import "./App.css"
import { ImageSlider } from "./components"

function App() {
  const slides = [{ url: "../../assets/image1.jpg" }]

  return (
    <div className="App">
      <ImageSlider />
    </div>
  )
}

export default App
