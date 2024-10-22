import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import DirectionsIcon from '@material-ui/icons/Directions';

const styles = {
  root: {
    padding: '0px px',
    display: 'flex',
    alignItems: 'center',
    width: 250,
    float: 'right',
    marginTop:'10px',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 5,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
};

function CustomizedInputBase(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root} elevation={1}>
      
      <InputBase className={classes.input} placeholder="Search by Invoice Number " />
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
      
      
    </Paper>
  );
}

CustomizedInputBase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputBase);