import React from "react"
import "./ImageSlider.css"
// import image1 from "./import"
// import image1 from "../../assets/image1.jpg"
import data from "./import"

function ImageSlider() {
  return (
    <div className="slides-container">
      {/* <div>
        <img alt="test" />
      </div> */}
      {data.map(obj => {
        return (
          <div>
            <img src={obj.url}alt="test" />
          </div>
        )
      })}
    </div>
  )
}

export default ImageSlider
