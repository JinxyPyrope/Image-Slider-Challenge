import "./App.css"
import { ImageSlider } from "./components"
import sliderData from "./components/image-slider/sliderData"

function App() {
  return (
    <div className="App">
      <ImageSlider slides={sliderData} />
    </div>
  )
}

export default App
