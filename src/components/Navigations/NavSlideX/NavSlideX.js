import React from "react";
import css from "./NavSlideX.module.css";

//Инпут переключает слайды по оси Х.
const NavSlideX = ({inputRange, handleChange, upHandler}) => {

    return (
        <div className={css.wrapper}>
            <input type="range"
                   className={css.range}
                   min="0"
                   max="100"
                   value={inputRange}
                   onChange={e => handleChange(e)}
                   onTouchEnd={e => upHandler(e)}
                   style={{
                       background:
                           `linear-gradient(to right,
                         rgb(209, 234, 255) 0%,
                         rgb(209, 234, 255) ${inputRange}%,
                         rgba(255, 255, 255, 0.25) ${inputRange}%,
                         rgba(255, 255, 255, 0.25) 100%)
                         `
                   }}
            />

            <div className={css.years}>
                <div className={css.years__item}>1998</div>
                <div className={css.years__item}>2009</div>
                <div className={css.years__item}>2016</div>
            </div>
        </div>
    )
};

export default NavSlideX;