import React from 'react';

import classes from '../screen.module.css';

const ScreenButton = (props) => {
    return (
        <button className={`${classes.card} ${classes['screen-button']}`} onClick={() => {props.clickHandler()}}>
            {props.children}
        </button>
    );
};

export default ScreenButton;