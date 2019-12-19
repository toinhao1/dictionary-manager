import React from 'react'
import { Link, AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';

import './header.styles.scss'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link color="inherit" underline="none" href="/">Dictionary Manager</Link>
          </Typography>
          <Button color="inherit">
            <Link color="inherit" underline="none" href="/create">Create New Dictionary</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
