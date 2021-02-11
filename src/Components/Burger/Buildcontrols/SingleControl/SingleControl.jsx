import React from 'react';
import classes from './SingleControl.css';
const SingleControl=(props)=>{
    return(
    <div className={classes.SingleControl}>
        <div clasName={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className={classes.More} onClick={props.added} >More</button>
    </div>
    );
}
export default SingleControl;