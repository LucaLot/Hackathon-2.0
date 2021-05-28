
import React from 'react';

import classes from "./LegendItem.module.css";

const LegendItem = (props) => {
    return (
        <React.Fragment>
            <div className={classes.div}>
                <p className={classes.p}>{props.number}</p>
                <p className={classes.p}>{props.discription1}</p>
                <p className={classes.p}>{props.discription2}</p>
            </div>
        </React.Fragment>
    );
};

export default LegendItem;