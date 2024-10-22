import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles, makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import { SERVER_URL, ROLL_NUMBER } from '../utils/constants';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from "@mui/material/Checkbox";
import CollectorStyle from '../views/CollectorStyle.css';
import { useEffect } from "react";
import axios from "axios";

import { CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

const useStyles = makeStyles((theme) => ({
  due_dtFieldRed: {
      color: 'red',
  },
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    backgroundColor: '#273D49CC',
    overflowX: 'auto',
    "&$checked": {
      color: 'primary !important',
  }
    
  },
  checked: {
    
  },
  table: {
    minWidth: 700,
    //backgroundColor: '#273D49CC',
    color: 'white',
    
  },
  tableCell2: {
    borderBottom: '1px solid #1e2c35',
    color: '#97A1A9',
},
tableCell: {
  borderBottom: '1px solid #283A46',
  color: 'white',
},
}));

function Tryinginf() {
  let [responseData, setResponseData] = React.useState([]);
  let [isNext, isNextFunc] = React.useState(false);
  let [pageCount, setCount] = React.useState(1);
  const classes = useStyles();
  const fetchData = () => {
    console.log("Inside fetch");
    axios.get(

      `http://localhost:8080/1829205/dummy.do?page=${pageCount}&size=20`

    ).then((response) => {
      console.log(response.data.invoices);
      if(response.data.invoices.length === 0)
       isNext(false);
      setResponseData([...responseData, ...response.data.invoices]);
      console.log(responseData);

    }).catch((error) => {

      console.log(error);

    });
  };
  function fetchMore() {
    console.log("Called fetchMore");
    setCount(pageCount + 1);
    fetchData();
  }

  useEffect( () =>{
    isNextFunc(true);
    fetchMore();
  },[])

  const DataTableCell = withStyles(() => ({
    root: {
      border: 'None',
      color: '#FFFFFF',
      fontSize: '12px',
      width: '0%',
      padding: '0px',
  }
}))(TableCell);

  return (
    <div id="scrollableDiv" style={{ overflow: "auto", width: '98%' }}>
    <InfiniteScroll
      dataLength={responseData.length}
      next={fetchMore}
      hasMore={isNext}
      loader={
        <div>
          Loading more data...Please Wait..
          <CircularProgress/>
        </div>
      }
      height={350}
      scrollableTarget="scrollableDiv">
        <Table className={classes.table}>
        <TableHead>
          <TableRow >
          <TableCell className={classes.tableCell2} padding="checkbox"> <Checkbox classes={{checked: classes.checked}} color="primary" /> </TableCell>
            <TableCell className={classes.tableCell2}>Customer Name</TableCell>
            <TableCell className={classes.tableCell2} align="right">customer#</TableCell>
            <TableCell className={classes.tableCell2} align="right">Order Id</TableCell>
            <TableCell className={classes.tableCell2} align="right">Invoice Amount</TableCell>
            <TableCell className={classes.tableCell2} align="right">Due Date</TableCell>
            <TableCell className={classes.tableCell2} align="right">Predicted  Date</TableCell>
            <TableCell className={classes.tableCell2} align="right">Aging Bucket</TableCell>
            <TableCell className={classes.tableCell2} align="right">Notes</TableCell>
          </TableRow>
        </TableHead>
      <TableBody>
              {responseData.map((data, index) => (
                <TableRow key={data.doc_id}>
                  <DataTableCell align="left" padding="checkbox">
                  <TableCell className={classes.tableCell2} padding="checkbox"> <Checkbox classes={{checked: classes.checked}} color="primary" /> </TableCell> 
                  </DataTableCell>
                  <DataTableCell  scope="data" align="left">{data.name_customer}</DataTableCell>
                  <DataTableCell  align="left">{data.cust_number}</DataTableCell>
                  <DataTableCell  align="left">{data.invoice_id}</DataTableCell>
                  <DataTableCell  align="right">{data.total_open_amount}K</DataTableCell>
                  <DataTableCell align="right" >{data.due_in_date}</DataTableCell>
                  <DataTableCell  align="right">--</DataTableCell>
                  <DataTableCell >--</DataTableCell>
                  <DataTableCell >Lorem Ipsum</DataTableCell>
                </TableRow>
              ))}
            </TableBody>
            </Table>  
      </InfiniteScroll>
      </div>
  );
}
export default Tryinginf;