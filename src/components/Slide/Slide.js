import React, {useState} from 'react';
import css from './Slide.module.css';
import SlideX from "./SlideX";
import NavSlideY from "../Navigations/NavSliderY/NavSlideY";
import AnimationsYfirst from "./SlideY_1_animations/SlideY_1_animations";

const Slide = () => {

    const [state, setState] = useState({
        positionY: 0,
    });

    let y1 = 0;
    const startTouch = (e) => {
        y1 = e.changedTouches[0].clientY
    };

    const endTouch = (e) => {
        let y2 = e.changedTouches[0].clientY

        if (y1 > y2 && state.positionY >= (-100)) {
            setState({
                ...state,
                positionY: state.positionY - 100
            })
        }

        if (y1 < y2 && state.positionY < 0) {
            setState({
                ...state,
                positionY: state.positionY + 100
            })
        }
    };

    return (
        <div className={css.wrapper}>
            <div className={css.filmLenta}
                 style={{top: state.positionY + "vh"}}
                 onTouchStart={startTouch}
                 onTouchEnd={endTouch}
            >

                <div className={css.filmLenta__item}> <AnimationsYfirst/> </div>
                <div className={css.filmLenta__item}/>
                <div className={css.filmLenta__item}> <SlideX/> </div>

                <div className={css.arrowFooter} style={state.positionY !== -200 ? {opacity: 1} : {opacity: 0}}/>
            </div>

            <NavSlideY state={state} setState={setState}/>
        </div>
    )
};

export default Slide;

//1.<AnimationsYfirst/> - это анимация пульсации очаги, слайд 1, осьY.
//2.<SlideX/> - это слайдеры по оси Х.
//3.<NavSlideY/> - это навигация по осу Y.
