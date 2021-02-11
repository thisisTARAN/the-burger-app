import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import DrawerTroggle from '../../Navigation/SideDrawer/DrawerTroggler/DrawerTroggler';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar=(props)=>(
    <header className={classes.Toolbar}>
    <DrawerTroggle clicked={props.drawerToggleClicked}/>
    <div style={{height:'80%'}}>
    <Logo/> 
    </div>
    
    <nav>
      <NavigationItems/>
    </nav>
    </header>
);
export default toolbar;
