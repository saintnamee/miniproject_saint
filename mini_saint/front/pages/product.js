import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'

const Procdutes = ({ token }) => {

    // const [user, setUser] = useState({})

    // useEffect(() => {
    //     fooUser()
    // }, [])

    // const fooUser = async () => {
    //     try {
            
    //         const users = await axios.get(`${config.URL}/foo`, {
    //             headers: { Authorization: `Bearer ${token}` }
    //         })
           
    //         setUser(users.data)
    //     }
    //     catch (e) {
    //         console.log(e)
    //     }

    // }

    return (
        
        <Layout>
            <Head>
            
                <title>Bootstrap Example</title>

            </Head>
            <Navbar />
            <div>
            <div className={styles.list}>
            <Col className="col-lg-12 col-12">
                
                <div><img src="https://nextjs.org/static/twitter-cards/documentation.png"        
                width={1000}
                height={500}></img>
                <h1>aadsf</h1></div>
                <div><h1>aadsf</h1></div>
            </Col>
            
            </div>
            </div>
        </Layout>
    )
}

// export default withAuth(Foo1)
export default Procdutes

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
