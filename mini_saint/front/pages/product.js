import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'

const Procdutes = ({ token }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        fooUser()
    }, [])

    const fooUser = async () => {
        try {
            
            const users = await axios.get(`${config.URL}/foo`, {
                headers: { Authorization: `Bearer ${token}` }
            })
           
            setUser(users.data)
        }
        catch (e) {
            console.log(e)
        }

    }

    return (
        
        <Layout>
            <Head>
            
                <title>Bootstrap Example</title>

            </Head>
            <Navbar />
            <div className={styles.container}>
                
                <h1>sadd</h1>
            </div>

        </Layout>
    )
}

// export default withAuth(Foo1)
export default Procdutes

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
