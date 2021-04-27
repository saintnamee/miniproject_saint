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
const URL = "http://localhost/api/students";
const URL_SEL = "http://localhost/api/purchase";
const fetcher = (key) => fetch(key).then((res) => res.json());
const Index = () => {
  // const { data, error } = useSWR(URL, fetcher, { revalidateOnFocus: false });
  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>Loading...</div>;
  // console.log("data", data);

  // const selStu = async (id) => {
  //   let result = await axios.post(`${URL_SEL}/${id}`)
  //   mutate(URL, data);
  // }
  const [products,setProducts] = useState([])
    const getProducts =async()=>{
      let allproduct = await axios.get(`${config.URL}/allproduct`)
      setProducts(allproduct.data)
      console.log("data>>>>", allproduct.data);
    } 
  useEffect(() =>{
    getProducts()
  },[]) 

  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      
      </Head>
      <Navbar />
      <div className={styles.container}>
        <div style={{display:'flex'}} >{
          products.map((item)=>{
            return (<div style={{margin:5}}>
            <Card/>
           </div> )
          })
        }
        </div>
      </div>
      {/* <div className={styles.container}>
      <Slitbox/>
      <Card/>
        
      </div> */}

  
    </Layout>
  );
};
export default Index;
