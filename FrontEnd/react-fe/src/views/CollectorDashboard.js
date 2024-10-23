import React, { useState } from 'react';
import theme, { pxToVh } from '../utils/theme';
import { Paper, rgbToHex } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Grid2 from '@mui/material/Grid2';
import Footer from '../components/Footer';
import { InputBase, TextField, OutlinedInput, Button } from '@mui/material/';
import CollectorStyle from './CollectorStyle.css';
import { alpha } from '@mui/material/styles';
import SimpleTable from '../components/Table.js';
import CustomizedInputBase from '../components/Searchbar.js';
import CustomizedDialogDemo from '../components/Deletebutton.js';
import FormDialog from '../components/Editbutton.js';
import AddDialog from '../components/Addbutton.js';
import ViewCorrespondance from '../components/ViewCorrespondance';
const useStyles = makeStyles(() => ({
  body: {
    top: '0px',
    left: '0px',
    width: '100vw',
    height: '100vh',
    background: 'transparent radial-gradient(closest-side at 50% 50%, #58687e 0%, #39495e 100%) 0% 0% no-repeat padding-box',
    opacity: 1,
  },

  button: {
    margin: theme.spacing.unit,
    textTransform: 'capitalize',
    height: '30px',
    textAlign: 'left',
    font: 'serif normal normal 20px/24px Ubuntu',
    color: '#FFFFFF',
    opacity: 1,
    backgroundColor: '#273D49CC',
    border: 'solid white',
    '&:hover': {
      backgroundColor: 'grey',
      border: 'blue',
    }


  },
  button2: {
    margin: theme.spacing.unit,
    textTransform: 'capitalize',
    height: '30px',
    textAlign: 'left',
    font: 'serif normal normal 20px/24px Ubuntu',
    color: '#FFFFFF',
    opacity: 1,
    float: 'right',
    position: 'relative',
    backgroundColor: '#273D49CC',
    border: 'solid white',
    '&:hover': {
      backgroundColor: 'grey',
      border: 'blue',
    }
  },
  

  
  buttondiv: {
    //backgroundColor: '#273D49CC',
    //marginTop: '20px',
    marginLeft: '15px',
    marginRight: '15px',
  },

  search: {
    position: 'relative',
    width: '210px',
    height: '30px',
    textAlign: 'left',


    color: '#97A1A9',
    opacity: 1,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,

    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '200px',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '200px',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  root: {
    backgroundColor: '#273D49CC',
    marginLeft: '15px',
    marginRight: '15px',
    
    //borderRadius: 3,
  },
  /*edittable: {
    backgroundColor: '#273D49CC',
    marginLeft: '15px',
    marginRight: '15px',
    'tr:nth-child(even)': {backgroundColor: '#f2f2f2',}
    'tr:nth-child(odd)': {backgroundColor: 'red' ,}
  }*/

  /*root: {
    flexGrow: 1,
    paddingLeft: '1vw',
    paddingRight: '1vw',
  },
  
  searchBtnDisabled: {
    minWidth: '5vw',
    minHeight: '2.188vw',
    fontSize: '0.95vw',
    border: 'solid 0.75px #3B617C',
    // marginRight: '0.5rem',
    alignSelf: 'center',
    color: 'white !important',
    background: '#FFFFFFa5',
    '&:hover': {
      cursor: 'default',
      backgroundColor: '#FFFFFFa5',
    }
  },
  searchBtn: {
    marginTop: '2vh',
    minWidth: '5vw',
    minHeight: '2.188vw',
    fontSize: '0.95vw',
    border: 'solid 0.75px #3B617C',
    // marginRight: '0.5rem',
    alignSelf: 'center',
    color: '#5DAAE0',
    '&:hover': {
      backgroundColor: '#5daae0',
      color: 'white',
    },
  }, */
}));

const CollectorDashboard = () => {


  const classes = useStyles();
  return (
    <div className={classes.body}>
      <div>
        <h3 className="product">XYZ Finances</h3>
        <h4 className="invoicelist">Invoice List</h4>
      </div>
      <Paper classes={{
        root: classes.root, 
      }}>
        <div className={classes.buttondiv}>
          <Grid2 container styles={{
display: 'flex',
justifyItems: 'flex-start',
//alignItems: 'center',
}}>
            <Grid2 item xs={1}>
          <Button variant="outlined" href="#outlined-buttons" className={classes.button}>
            Predict
          </Button>
          </Grid2>
          <Grid2 item  xs={2}><ViewCorrespondance /></Grid2>
         
         <Grid2 item xs={3}><AddDialog /></Grid2>
          
          <Grid2 item xs={1}><FormDialog /></Grid2>
          
          <Grid2 item xs={2}><CustomizedDialogDemo /></Grid2>
          
          
          <Grid2 item xs={3}><CustomizedInputBase /></Grid2>
          
          </Grid2>
        </div>
        <div >
          <SimpleTable />
        </div>




      </Paper>
      <Footer />
    </div>
  );
};

export default CollectorDashboard;
