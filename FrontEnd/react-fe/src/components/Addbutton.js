import React from 'react';
import theme, { pxToVh } from '../utils/theme';
import { withStyles, makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { Grid2 } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
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
          <Grid2 container className={classes.dialogContainer}>
            <Grid2 item lg={4}>
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
            </Grid2>
            <Grid2 item lg={4}>
              <InputLabel style={{ color: 'white' }}>Due Date</InputLabel>
              <MaterialUIPickers />
              <InputLabel style={{ color: 'white' }}>Notes</InputLabel>
              <TextareaAutosize style={{ width: '200px' }} aria-label="minimum height" rowsMin={17} placeholder="Enter notes here" />
            </Grid2>
          </Grid2>
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

