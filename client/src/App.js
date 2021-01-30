import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customers';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
});

class App extends Component{
  state = {
    customers: ''
  }

  componentDidMount() {
    this.callApi()
      .then(res=> this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render(){
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>환자명</TableCell>
              <TableCell>핸드폰번호</TableCell>
              <TableCell>등록자</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>방문날짜</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers ? this.state.customers.map(c => {
            return <Customer key={c.id} id={c.id} name={c.name} phoneNumber={c.phoneNumber} doctor={c.doctor} birthday={c.birthday} visitDay={c.visitDay} />
            }): "" }
          </TableBody>
        </Table>
      </div>
    )
  }
};

export default withStyles(styles)(App);
