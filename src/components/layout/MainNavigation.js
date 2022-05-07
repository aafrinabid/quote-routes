import React from 'react';
import classes from './MainNavigation.module.css'
import { NavLink } from 'react-router-dom';

function MainHeader() {
  return (
<header className={classes.header}>
    <div className={classes.logo}>
        Quote master
    </div>
    <nav className={classes.nav}>
        <ul>
            <li><NavLink to='/quotes' activeClassName={classes.active}>All Quotes</NavLink></li>
            <li><NavLink to='/new-quote' activeClassName={classes.active}>Add a Quote</NavLink></li>

        </ul>
    </nav>
</header>
    )
} 

export default MainHeader