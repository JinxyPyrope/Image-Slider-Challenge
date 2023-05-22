import React, { useState } from "react"
import "./ImageSlider.css"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"
// import image1 from "./import"
// import image1 from "../../assets/image1.jpg"
import sliderData from "./sliderData"

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  console.log(current)

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section className="slides-container">
      <FaArrowAltCircleLeft className="left-arrow" />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        return <img src={slide.image} alt="travel Image" className="image" />
      })}
    </section>
  )
}

export default ImageSlider
