import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DisplayTable from '../display-table/display-table'
import DeleteButton from '../delete-button/delete-button'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minWidth: 600,
    marginTop: 12,
  },
  paper: {
    padding: theme.spacing(2),
    // margin: 5,
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const HomeGrid = ({ allDictionarys }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {
          allDictionarys.map(each => {
            return (
              <Grid key={each._id} bgcolor="text.hint" color="background.paper" item xs>
                <Paper className={classes.paper}>
                  <DisplayTable dictionary={each.dictionary} />
                  <DeleteButton id={each._id} />
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    Edit
                  </Button>
                </Paper>

              </Grid>
            )
          })
        }
      </Grid>
    </div>
  )
}

export default HomeGrid