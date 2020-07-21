import React from 'react';
import './Circles.css'

function Circles(props){
    return(
        <div className='Circles'>
            <div className={props.selected === 1 ? 'selected' : ''} ></div>
            <div className={props.selected === 2 ? 'selected' : ''} ></div>
            <div className={props.selected === 3 ? 'selected' : ''} ></div>
            <div className={props.selected === 4 ? 'selected' : ''} ></div>
        </div>
    )
}

export default Circles;