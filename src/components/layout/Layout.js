import React, { Fragment } from 'react'
import MainHeader from './MainNavigation'
import classes from './Layout.module.css'


function Layout(props) {
  return (
      <Fragment>
          <MainHeader />
          <main className={classes.main}>{props.children}</main>
      </Fragment>
  )
}

export default Layout