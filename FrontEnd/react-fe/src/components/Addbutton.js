import React from 'react';
import theme, { pxToVh } from '../utils/theme';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { Grid } from '@material-ui/core';
//import { useForm, Form } from '../../components/useForm';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import MaterialUIPickers from './DatePicker.js'

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
    backgroundColor: '#273D49CC',
    color: 'white',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
  /*paper: {
    maxWidth :"lg",
  }*/
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
    backgroundColor: '#273D49CC',
    color: 'white',
  },
  /*paper: {
    maxWidth :"lg",
  }*/
}))(MuiDialogContent);

const StyledDialog = withStyles({
  root: {
    "& .MuiDialog-paperFullWidth": {
      width: '100%'
    },
    "& .MuiDialog-paperWidthLg": {
      width: '700px',
      height: '90vh'
    },
    "& .MuiInputLabel-root": {
      color: "#97A1A9",
    },
    "& .MuiDialog-paper": {
      backgroundColor: '#2A3E4C',
      color: '#ffffff',
      borderRadius: '8px'
    }
  }
})(Dialog);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit,
    backgroundColor: '#273D49CC',
    color: 'white',
  },
  /* paper: {
     maxWidth :"lg",
   }*/
}))(MuiDialogActions);

const useStyles = makeStyles(() => ({
  dialogContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}));

export default function AddDialog() {

  let [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const button2 = {

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
  }
  const textField = {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    //height: '30px',
  }

  const classes = useStyles();

  return (
    <div>
      <Button variant="outlined" style={button2} onClick={handleClickOpen}>
        + Add
      </Button>
      <StyledDialog
        maxWidth="lg"
        fullWidth
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add Invoice
        </DialogTitle>
        <DialogContent>
          <Grid container className={classes.dialogContainer}>
            <Grid item lg={4}>
              <InputLabel style={{ color: 'white' }}>Customer Name</InputLabel>
              <TextField
                id="outlined-InvoiceAmount"
                //label="Invoice Amount"
                style={textField}
                //value={this.state.name}
                //onChange={this.handleChange('name')}
                margin="normal"
                variant="outlined"
                //fullWidth
              //value={values.fullName}
              //onChange={handleInputChange}
              //error={errors.fullName}          
              />
              <InputLabel style={{ color: 'white' }}>Customer No.</InputLabel>
              <TextField
                id="outlined-InvoiceAmount"

                style={textField}
                margin="normal"
                //helperText="hello"
                variant="outlined"
                //fullWidth
              //value={values.mobile}
              //onChange={handleInputChange}
              //error={errors.mobile}
              />
              <InputLabel style={{ color: 'white' }}>Invoice No.</InputLabel>
              <TextField 
                id="outlined-InvoiceAmount"

                style={textField}
                margin="normal"
                //helperText="hello"
                variant="outlined"
               // fullWidth
              //value={values.mobile}
              //onChange={handleInputChange}
              //error={errors.mobile}
              />
              <InputLabel style={{ color: 'white' }}>Invoice Amount</InputLabel>
              <TextField
                id="outlined-InvoiceAmount"

                style={textField}
                margin="normal"
                //helperText="hello"
                variant="outlined"
                //fullWidth
              //value={values.mobile}
              //onChange={handleInputChange}
              //error={errors.mobile}
              />
            </Grid>
            <Grid item lg={4}>
              <InputLabel style={{ color: 'white' }}>Due Date</InputLabel>
              <MaterialUIPickers />
              <InputLabel style={{ color: 'white' }}>Notes</InputLabel>
              <TextareaAutosize style={{ width: '200px' }} aria-label="minimum height" rowsMin={17} placeholder="Enter notes here" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Cancel
            </Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            Clear
            </Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            Add
            </Button>
        </DialogActions>
      </StyledDialog>
    </div>
  );
}

