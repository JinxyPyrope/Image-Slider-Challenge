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

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section className="slides-container">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        return (
          <div className={index === current ? "slide active" : "slide"} key={index}>
            {index === current && <img src={slide.image} alt="travel Image" className="image" />}
          </div>
        )
      })}
    </section>
  )
}

export default ImageSlider
