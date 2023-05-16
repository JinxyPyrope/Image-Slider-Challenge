import React from "react"
import { image01 } from "./import"

function ImageSlider() {
  return (
    <div className="slideshow container">
      <div className="slide-1">
        <img src={image01} alt="Test" />
      </div>
    </div>
  )
}

export default ImageSlider
