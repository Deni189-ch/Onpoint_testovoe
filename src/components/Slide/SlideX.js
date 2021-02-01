import React, {useState} from "react";
import css from "./SlideX.module.css";
import NavSlideX from "../Navigations/NavSlideX/NavSlideX";

const SlideX = () => {

    const [range, setRange] = useState(0)
    const [positionX, setPositionX] = useState(0)

    const handleChange = (event) => {
        setRange(event.target.value)

        if (range > 0 && range < 20) {
            setPositionX( 0)
        } else if (range > 20 && range < 70) {
            setPositionX( 100)
        } else if (range > 75 && range < 100) {
            setPositionX( 200)
        }
    }

    const upHandler = (event) => {
        event.stopPropagation()

        if (event.target.value > 0 && event.target.value < 20) {
            setRange(0)
            setPositionX(0)
        } else if (event.target.value > 20 && event.target.value < 70) {
            setRange(50)
            setPositionX(100)
        } else if (event.target.value > 75 && event.target.value < 100) {
            setRange(100)
            setPositionX(200)
        }
    }

    return (
        <>
            <div className={css.filmX__lenta} style={{right: positionX + "%"}}>
                <div className={css.filmX__item}/>
                <div className={css.filmX__item}/>
                <div className={css.filmX__item}/>
            </div>

            <NavSlideX
                inputRange={range}
                handleChange={handleChange}
                upHandler={upHandler}
            />
        </>
    )
};

export default SlideX;

