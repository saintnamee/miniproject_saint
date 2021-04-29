import Head from 'next/head'
import Layout from '../components/layout'
import useSWR, { mutate } from "swr";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/Index.module.css";
import Navbar from "../components/navbar";
import Card from "../components/card"; 
import Slitbox from "../components/slitbox"
import config from "../config/config"
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import {Grid} from "@material-ui/core"
import { users } from '../../back/database';
const URL = "http://localhost/api/students";
const URL_SEL = "http://localhost/api/purchase";
const fetcher = (key) => fetch(key).then((res) => res.json());
const Index = ({token}) => {
  // const { data, error } = useSWR(URL, fetcher, { revalidateOnFocus: false });
  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>Loading...</div>;
  // console.log("data", data);

  // const selStu = async (id) => {
  //   let result = await axios.post(`${URL_SEL}/${id}`)
  //   mutate(URL, data);
  // }
  const [products,setProducts] = useState([])
  const [user,setUser] = useState([])
    const getProducts =async()=>{
      let allproduct = await axios.get(`${config.URL}/allproduct`)
      setProducts(allproduct.data)
      console.log("data>>>>", allproduct.data);
    } 
  useEffect(() =>{
    getProducts()
    profileUser()
  },[]) 
  const profileUser = async () => {
    try {

        const users = await axios.get(`${config.URL}/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        })
       console.log('profileUser>>>',users)
        setUser(users.data)
    }
    catch (e) {
        console.log(e)
    }

}

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
      <Grid container spacing={1} >
        {
          products.map((item)=>{
            return (
              
            <Grid container item md={3} >
            <Card id={item.id} productsname={item.productsname} discription={item.discription} price={item.price}imageurl={item.imageurl} userid={user.id}/>
            </Grid>
            
            )
          })
        }
        </Grid>
        
      </div>
      

    </Layout>
  );
};
// export default Index;
// export function getServerSideProps({ req, res }) {
//   return { props: { token: req.cookies.token || "" } };
// }
