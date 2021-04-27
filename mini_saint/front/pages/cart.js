import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Cart = ({ token }) => {
    const getcart =async()=>{
        let cart = await axios.get(`${config.URL}/cart`)
        setcarts(cart.data)
        console.log("data>>>>", allproduct.data);
      } 
      useEffect(() =>{
        getcarts()
      },[]) 

    const classes = useStyles();
    

    return (
        <Layout>
            <Head>
                <title>User profile</title>
            </Head>
            <div className={styles.container}>
                <Navbar />
                <h1>User profile</h1>
                <div>
                <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ลำดับที่</TableCell>
            <TableCell align="right">ชื่อสินค้า</TableCell>
            <TableCell align="right">จำนวน</TableCell>
            <TableCell align="right">ราคา</TableCell>
            <TableCell align="right">ราคารวม</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

                </div>
                <div>
                    <b>Token:</b> {token.substring(0, 15)}... <br /><br />
                    This route is protected by token, user is required to login first.
                    <br/>
                    Otherwise, it will be redirect to Login page
                    <br/><br/>
                    {JSON.stringify(user)}
                </div>
            </div>
        </Layout>
    )
}

export default withAuth(Cart)

