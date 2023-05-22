import React, { useState } from "react"
import "./ImageSlider.css"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"
// import image1 from "./import"
// import image1 from "../../assets/image1.jpg"
import sliderData from "./sliderData"

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  return (
    <section className="slides-container">
      <FaArrowAltCircleLeft className="left-arrow" />
      <FaArrowAltCircleRight className="right-arrow" />
      {sliderData.map((image, index) => {
        return <img src={image.url} alt="travel Image" className="image" />
      })}
    </section>
  )
}

export default ImageSlider
