import React from 'react';

import classes from '../screen.module.css';

const ScreenText = (props) => {
    return (
        <div className={`${classes.card} ${classes['screen-text']}`}>{props.children}</div>
    );
};

export default ScreenText;