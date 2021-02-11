import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
const sideDrawer=(props)=>{
    let AllClasses=[classes.SideDrawer,classes.Close];
    if(props.open){
        AllClasses=[classes.SideDrawer,classes.Open];
    }
    return (
        <Aux>
        <Backdrop show={props.open} backDropClick={props.closed}/>
        <div className={AllClasses.join(' ')}>
        <div style={{height:'11%',marginBottom:'32px'}}>
            <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Aux>
    )

};
export default sideDrawer