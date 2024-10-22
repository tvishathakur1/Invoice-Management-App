import React from 'react';
import theme, { pxToVh } from '../utils/theme';
import { withStyles } from '@material-ui/core/styles';
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

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
    backgroundColor: '#2A3E4C',
    color: 'white',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
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
    backgroundColor: '#2A3E4C',
    color: 'white',
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit,
    backgroundColor: '#2A3E4C',
    color: 'white',
  },
}))(MuiDialogActions);

export default class FormDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const button2 ={
        
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
    const textField ={
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    }
    return (
      <div>
        <Button variant="outlined"  style={button2} onClick={this.handleClickOpen}>
            / Edit
          </Button>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Edit Invoice
          </DialogTitle>
          <DialogContent>
          <InputLabel htmlFor="max-width" style={{color: 'white'}}>Invoice Amount</InputLabel>
          <TextField
                id="outlined-InvoiceAmount"
                //label="Invoice Amount"
                style={textField}
                //value={this.state.name}
                //onChange={this.handleChange('name')}
                margin="normal"
                variant="outlined"
                //fullWidth
            />
            <InputLabel htmlFor="max-width" style={{color: 'white'}}>Notes</InputLabel>
            <TextField
                id="outlined-textarea"
                //label="Notes"
                multiline
                
                //value={this.state.multiline}
                //onChange={this.handleChange('multiline')}
                style={textField}
                margin="normal"
                //helperText="hello"
                variant="outlined"
                //fullWidth
        />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" variant="contained">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary" variant="contained">
              Reset
            </Button>
            <Button onClick={this.handleClose} color="primary" variant="contained">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

