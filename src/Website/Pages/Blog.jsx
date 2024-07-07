import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Header1 from '../Component/Header1'
import Footer from '../Component/Footer'

function Blog() {

    const redirect=useNavigate();
    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/blog`);
        console.log(res);
        setData(res.data);
    }


    return (
        <div>
            <Header1/>
            <section className="blog_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Blog
                        </h2>
                        <img src="images/plug.png" alt />
                    </div>
                    <div className="row">
                    {
                            data.map((value, index) => {
                                return (
                                    <div key={index} className="col-md-4">
                                       
                                        <div className="box ">
                                            <img src={value.img} width="100%" height="255px" alt />
                                            <div className="detail-box">
                                                <h5>
                                                    {value.name}
                                                </h5>
                                                <p>
                                                    {value.desc}
                                                </p>
                                            </div>
                                        </div>
                                       
                                    </div>
                                )
                            })
                        }
                        <div className="col-md-4">
                            <div className="box">
                                <div className="img-box">
                                    <img src="images/blog1.jpg" alt />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Blog Title Goes Here
                                    </h5>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box">
                                <div className="img-box">
                                    <img src="images/blog2.jpg" alt />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Blog Title Goes Here
                                    </h5>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <Footer/>
        </div>

    )
}

export default Blog