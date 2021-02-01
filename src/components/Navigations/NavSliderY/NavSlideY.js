import React from 'react';
import css from './NavSlideY.module.css';

const NavSlideY = ({state, setState}) => {

    return (
        <div className={css.wrapper}>
            <div className={css.indikatorY} onClick={() => setState({...state, positionY: 0})}
                style={state.positionY === 0 ? {background: '#f78b1f'} : null}
            />
            <div className={css.indikatorY} onClick={() => setState({...state, positionY: -100})}
                style={state.positionY === (-100) ? {background: '#f78b1f'} : null}
            />
            <div className={css.indikatorY} onClick={() => setState({...state, positionY: -200})}
                style={state.positionY === (-200) ? {background: '#f78b1f'} : null}
            />
        </div>
    )
};

export default NavSlideY;

//1.Индикаторы перемещения по слайдам оси Y.