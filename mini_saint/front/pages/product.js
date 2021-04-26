import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'

const Foo1 = ({ token }) => {

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
                <title>Coffee Saint</title>
            </Head>
            <Navbar />
            <div class="slideshow-container">


                <div class="mySlides fade">
                    <div class="numbertext">1 / 3</div>
                    <img src="img1.jpg" style="width:100%">
                        <div class="text">Caption Text</div>
  </div>

                    <div class="mySlides fade">
                        <div class="numbertext">2 / 3</div>
                        <img src="img2.jpg" style="width:100%">
                            <div class="text">Caption Two</div>
  </div>

                        <div class="mySlides fade">
                            <div class="numbertext">3 / 3</div>
                            <img src="img3.jpg" style="width:100%">
                                <div class="text">Caption Three</div>
  </div>


                            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                            <a class="next" onclick="plusSlides(1)">&#10095;</a>
                        </div>
                        <br>


                            <div style="text-align:center">
                                <span class="dot" onclick="currentSlide(1)"></span>
                                <span class="dot" onclick="currentSlide(2)"></span>
                                <span class="dot" onclick="currentSlide(3)"></span>
                            </div>

                            {/* <div className={styles.products}>
                <div>
                <img  src="https://www.coffeefavour.com/wp-content/uploads/2016/05/cafe-latte-art_5166479-1024x576.jpg"alt="latte"/>
                <img  src="https://www.coffeefavour.com/wp-content/uploads/2016/04/capuccino.jpg"alt="cappuccino"/>
                <img  src="https://www.coffeefavour.com/wp-content/uploads/2016/05/cafe-latte-art_5166479-1024x576.jpg"alt="latte"/>
                <img  src="https://www.coffeefavour.com/wp-content/uploads/2016/05/cafe-latte-art_5166479-1024x576.jpg"alt="latte"/>
                </div>
             */}
                            <h1>Coffee Saint</h1>
                            <div>
                                <b>Token:</b> {token.substring(0, 15)}... <br /><br />
                    This route is protected by token, user is required to login first.
                    <br />
                    Otherwise, it will be redirect to Login page
                    <br /><br />
                                {JSON.stringify(user)}
                            </div>
                            {/* </div> */}
        </Layout>
    )
}

export default withAuth(Foo1)

export function getServerSideProps({req, res}) {
    return {props: {token: req.cookies.token || "" } };
}
