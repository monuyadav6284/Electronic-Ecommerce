import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Header1 from '../Component/Header1'
import Footer from '../Component/Footer'

function Index() {
    
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
            <Header1 />
            <div>

                {/* slider section */}
                <section className=" slider_section ">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="detail_box">
                                    <h1>
                                        Electrical <br />
                                        Service <br />
                                        Providers
                                    </h1>
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
                                    </p>
                                    <NavLink className="nav-link" to="/contact"> Contact-Us</NavLink></div>

                                <a href className>
                                </a></div><a href className>
                            </a><div className="col-lg-5 col-md-6 offset-lg-1"><a href className>
                            </a><div className="img_content"><a href className>
                                <div className="img_container">
                                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div className="img-box">
                                                    <img src="images/slider-img.jpg" alt />
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="img-box">
                                                    <img src="images/slider-img.jpg" alt />
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="img-box">
                                                    <img src="images/slider-img.jpg" alt />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a><a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end slider section */}
            </div>
            {/* service section */}
            <section className="service_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Our Services
                        </h2>
                        <img src="images/plug.png" alt />
                    </div>
                    <div className="service_container">
                        <div className="box">
                            <div className="img-box">
                                <img src="images/s1.png" className="img1" alt />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Equipment installation
                                </h5>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available,
                                </p>
                            </div>
                        </div>
                        <div className="box active">
                            <div className="img-box">
                                <img src="images/s2.png" className="img1" alt />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Windmill Energy
                                </h5>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available,
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src="images/s3.png" className="img1" alt />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Equipment Maintenance
                                </h5>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available,
                                </p>
                            </div>
                        </div>
                        <div className="box ">
                            <div className="img-box">
                                <img src="images/s4.png" className="img1" alt />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Offshore Engineering
                                </h5>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available,
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src="images/s5.png" className="img1" alt />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Electrical Wiring
                                </h5>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available,
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="btn-box">
                        <Link to="/service"> Read More </Link>
                    </div>
                </div>
            </section>
            {/* end service section */}
            {/* about section */}
            <section className="about_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>
                                        About Us
                                    </h2>
                                    <img src="images/plug.png" alt />
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                    in reprehenderit in voluptate velit
                                </p>
                                <a href>
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="img_container">
                                <div className="img-box b1">
                                    <img src="images/about-img1.jpg" alt />
                                </div>
                                <div className="img-box b2">
                                    <img src="images/about-img2.jpg" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end about section */}
            {/* blog section */}
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
            {/* end blog section */}
            {/* contact section */}
            <section className="contact_section layout_padding">
                <div className="container ">
                    <div className="heading_container">
                        <h2>
                            Contact Us
                        </h2>
                        <img src="images/plug.png" alt />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <form action>
                                <div>
                                    <input type="text" placeholder="Name" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Phone Number" />
                                </div>
                                <div>
                                    <input type="text" className="message-box" placeholder="Message" />
                                </div>
                                <div className="d-flex ">
                                    <button>
                                        SEND
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <div className="map_container">
                                <div className="map-responsive">
                                    <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width={600} height={300} frameBorder={0} style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-box">
                        <button style={{marginLeft:"500px"}}>
                        <Link to="/review_form">Review Form</Link>
                        </button>
                    </div>
                </div>
            </section>
            {/* end contact section */}


            <Footer />
        </div>

    )
}

export default Index