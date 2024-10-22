import React from 'react';
import theme, { pxToVh } from '../utils/theme';
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


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

const StyledDialog = withStyles({
    root: {
      "& .MuiDialog-paperFullWidth": {
        width: '100%'
      },
      "& .MuiDialog-paperWidthLg": {
        width: '850px',
        height: '80vh'
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
    backgroundColor: '#2A3E4C',
    color: 'white',
  },
}))(MuiDialogActions);

class ViewCorrespondance extends React.Component {
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
    return (
      <div>
        <Button variant="outlined" style={button2}  onClick={this.handleClickOpen}>
            View Correspondance
        </Button>
        <StyledDialog
            maxWidth="lg"
            fullWidth
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            View Correspondance(s)?
          </DialogTitle>
          <DialogContent>
            <Typography gutterBottom>
              Subject- Invoice Details-(Account Name)
            </Typography>
            <Typography gutterBottom>
              <p>Dear Sir/Madam,</p>
                <p>Greetings!</p>
            </Typography>
            <Typography gutterBottom>
             This is to remind you that there are one or more open invoices on your account.
              lease provide at your earliest convenience an update on the payment details or clarify the 
              reason for the delay. If you have any specific issue with the invoice(s), please let us know
               so that we can address it to the correct Department.
            </Typography>
            <Typography gutterBottom>
            Please find the details of the invoices below:
            </Typography>

            
            <Typography gutterBottom>
           Total amount to be paid:
            </Typography>
            <Typography gutterBottom>
             In case you have already made a payment for the above items,
              please send us the details to ensure the payment is posted.
              <p> Let us know if we can be of any further assistance.Looking forward to hearing from you.</p>
               <p> Kind Regards,</p> 
               <p>[Sender’s First Name][Sender’s Last Name] </p>
               <p>Phone : [Sender’s contact number] </p>
               <p>Fax : [If any] </p>
               <p>Email : [Sender’s Email Address] </p> 
               <p>Company Name[Sender’s Company Name]</p>
            </Typography>
            


            
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" variant="contained">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary" variant="contained">
              Download
            </Button>
          </DialogActions>
        </StyledDialog>
      </div>
    );
  }
}

export default ViewCorrespondance;