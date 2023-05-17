import "./App.css"
import { ImageSlider } from "./components"
import { image01, image02, image03, image04 } from "./components/image-slider/import"

function App() {
  const images = [{ id: 1, url: { image01 } }]

  return (
    <div className="App">
      <ImageSlider images={images}/>
    </div>
  )
}

export default App
