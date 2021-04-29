import Head from 'next/head'
import Layout from '../components/layout'
import useSWR, { mutate } from "swr";
import axios from "axios";
import React, { } from "react";
import styles from "../styles/Index.module.css";
import Navbar from "../components/navbar";
import {Grid} from "@material-ui/core";
// import React, { useEffect, useState } from "react";
import Card from "../components/card"; 
// import {users} from '../../back/database';
const URL = "http://localhost/api/students";
const URL_SEL = "http://localhost/api/purchase";
const fetcher = (key) => fetch(key).then((res) => res.json());
const index = () => {
//   const [products,setProducts] = useState([])
//   const [user,setUser] = useState([])
//     const getProducts =async()=>{
//       let allproduct = await axios.get(`${config.URL}/allproduct`)
//       setProducts(allproduct.data)
//       console.log("data>>>>", allproduct.data);
//     } 
//   useEffect(() =>{
//     getProducts()
//     profileUser()
//   },[]) 
//   const profileUser = async () => {
//     try {

//         const users = await axios.get(`${config.URL}/profile`, {
//             headers: { Authorization: `Bearer ${token}` }
//         })
//        console.log('profileUser>>>',users)
//         setUser(users.data)
//     }
//     catch (e) {
//         console.log(e)
//     }

// }
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      
      </Head>
      <Navbar />
      <div>
        <h1></h1>
      </div>
      
      
      <div className={styles.container}> 
      {/* <Grid container spacing={1} >
        {
          products.map((item)=>{
            return (
              
            <Grid container item md={3} >
            <Card id={item.id} productsname={item.productsname} discription={item.discription} price={item.price}imageurl={item.imageurl userid={user.id}} />
            </Grid>
            
            )
          })
        }
        </Grid> */}
       
      </div>
       

    </Layout>
  );
};
export default index;
