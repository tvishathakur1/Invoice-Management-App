import React from 'react';
import Paper from '@mui/material/Paper';
import theme, { pxToRem } from '../utils/theme';
import { withStyles } from '@mui/styles';
import { Typography, Grid } from '@mui/material';

const styles = theme => ({
  mainBackground: {
    background: theme.palette.primary.main,
    height: '100vh',
    width: '100vw'
  },
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: '100%',
    background: '#252C48',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  titleName: { fontSize: pxToRem(30), color: 'white' },
  subTitleName: {
    fontSize: pxToRem(20),
    color: 'white'
  }
});
function Footer(props) {
  const { classes } = props;
  return (
    <Grid
      item
      xs={12}
      style={{
        display: 'flex',
        marginRight: '5px',
        justifyContent: 'flex-end',
        height: "4.5vh",
        alignItems: "flex-end"
      }}
    >
    </Grid>
  );
}

export default withStyles(styles, { withTheme: true })(Footer);
