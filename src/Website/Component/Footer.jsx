import React from 'react'

function Footer() {
    
    return (
        <div>
            <section className="info_section layout_padding">
                <div className="container">
                    <div className="info_contact">
                        <div className="row">
                            <div className="col-md-4">
                                <a href>
                                    <img src="images/location-white.png" alt />
                                    <span>
                                        Passages of Lorem Ipsum available
                                    </span>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href>
                                    <img src="images/telephone-white.png" alt />
                                    <span>
                                        Call : +012334567890
                                    </span>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href>
                                    <img src="images/envelope-white.png" alt />
                                    <span>
                                        demo@gmail.com
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-lg-9">
                            <div className="info_form">
                                <form action>
                                    <input type="text" placeholder="Enter your email" />
                                    <button>
                                        subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="info_social">
                                <div>
                                    <a href>
                                        <img src="images/fb.png" alt />
                                    </a>
                                </div>
                                <div>
                                    <a href>
                                        <img src="images/twitter.png" alt />
                                    </a>
                                </div>
                                <div>
                                    <a href>
                                        <img src="images/linkedin.png" alt />
                                    </a>
                                </div>
                                <div>
                                    <a href>
                                        <img src="images/instagram.png" alt />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end info section */}
            {/* footer section */}
            <footer className="container-fluid footer_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-9 mx-auto">
                            <p>
                                © 2019 All Rights Reserved By
                                <a href="https://html.design/">Free Html Templates</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer section */}
        </div>

    )
}

export default Footer