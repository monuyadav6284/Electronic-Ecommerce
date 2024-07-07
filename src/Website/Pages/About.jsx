import React from 'react'
import Header1 from '../Component/Header1'
import Footer from '../Component/Footer'

function About() {
    return (
        <div>  
            <Header1/>
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
        <Footer/>
        </div>
  )
}

export default About