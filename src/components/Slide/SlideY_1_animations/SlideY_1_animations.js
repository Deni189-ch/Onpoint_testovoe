import React from "react";
import css from './SlideY_1_animations.module.css';

const AnimationsYfirst = () => {

    return (
        <>
            <div className={css.pulse}>
                <div className={css.pulse__out}/>
                <div className={css.pulse__in}/>
                <div className={css.pulse__in}/>
            </div>
            <div className={css.pulse}>
                <div className={css.pulse__out}/>
                <div className={css.pulse__in}/>
                <div className={css.pulse__in}/>
            </div>
            <div className={css.pulse}>
                <div className={css.pulse__out}/>
                <div className={css.pulse__in}/>
                <div className={css.pulse__in}/>
            </div>
            <div className={css.pulse}>
                <div className={css.pulse__out}/>
                <div className={css.pulse__in}/>
                <div className={css.pulse__in}/>
            </div>
        </>
    )
};

export default AnimationsYfirst;

