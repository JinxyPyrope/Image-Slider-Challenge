import React, { useState } from "react"
import "./ImageSlider.css"
// import image1 from "./import"
// import image1 from "../../assets/image1.jpg"
import data from "./import"

function ImageSlider() {
  const [current, setCurrent] = useState(0)
  const length = data.length

  return (
    <div className="slides-container">
      {data.map((image, index) => {
        return <img src={image.url} alt="travel Image" />
      })}
    </div>
  )
}

export default ImageSlider
