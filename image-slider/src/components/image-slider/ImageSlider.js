import React from "react"
import "./ImageSlider.css"
import image1 from "./import"
// import image1 from "../../assets/image1.jpg"



function ImageSlider() {
  return (
    <div className="slides-container">
      <div>
        <img src={image1} alt="test" />
      </div>
      {/* {dataSlider.map(obj => {
        return (
          <div>
            <img src={require(`../../assets/${obj.url}`)} alt="test" />
          </div>
        )
      })} */}
    </div>
  )
}

export default ImageSlider
