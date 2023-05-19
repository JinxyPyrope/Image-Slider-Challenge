import React from "react"
import "./ImageSlider.css"
import image1 from "../../assets/image1.jpg"
// import dataSlider from "./dataSlider"

function ImageSlider() {
  return (
    <div className="slides-container">
      <div>
        <img alt="test"/>
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
