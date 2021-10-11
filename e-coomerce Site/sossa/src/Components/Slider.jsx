import { ArrowLeftOutlined, ArrowRightOutlined, Translate } from '@material-ui/icons'
import React, { useState } from 'react'
import './slider.css'
import { sliderItems } from '../dataitems'

const Slider = () => {
    const [slideIndex, setslideIndex] = useState(0);
    const handleclick = (direction) => {
        if (direction == "left") {
            setslideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }
        else {
            setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0)

        }
    }
    return (
        <div className="slider-container">
            <div className="Arrow-left" onClick={() => handleclick("left")}>
                <ArrowLeftOutlined />
            </div>
            <div className="slider-wrapper" style={{ transform: `translateX(${slideIndex * -100}vw ` }}>

                {sliderItems.map(item =>
                    <div className="slide" key={item.id} >
                        <div className="img">
                            <img src={item.img} width="100%"></img>
                        </div>
                        <div className="info">

                            <h1>{item.title}</h1>


                            <p className="desc">
                                {item.desc}
                            </p>
                            <button className="btn">
                                Shop Now
                            </button>
                        </div>

                    </div>
                )}

            </div>

            <div className="Arrow-right" onClick={() => handleclick("right")}>
                <ArrowRightOutlined />
            </div>
        </div>

    )
}

export default Slider
