import React from "react"
import "./ImageSlider.css"
import { image01 } from "./import"

function ImageSlider() {
  return (
    <div className="slides-container">
      <img src={image01} alt="test" max-width="100%"/>
    </div>
  )
}

export default ImageSlider
