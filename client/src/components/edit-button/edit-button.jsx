import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const EditButton = ({ id }) => {
  const classes = useStyles();

  return (
    <>
      <a href={`/edit/${id}`}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Edit
      </Button>
      </a>
    </>
  )
}

export default EditButton;
