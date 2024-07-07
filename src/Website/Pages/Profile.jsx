import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Header1 from '../Component/Header1'
import Footer from '../Component/Footer'

function Profile() {

    const redirect=useNavigate();


    useEffect(() => {
        if(!(localStorage.getItem('userid')))
        {
            redirect('/');
        }
        fetch();
    }, []);

    const [singledata, setData] = useState({});

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem('userid')}`);
        console.log(res.data);
        setData(res.data);
    }

    return (
        <div>
            {/* about section */}
            <Header1/>
            <section className="about_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="detail-box">
                                <h2>
                                    Name : {singledata.name}
                                </h2>
                                <h2>
                                    Email : {singledata.email}
                                </h2>
                                <h2>
                                    Mobile : {singledata.mobile}
                                </h2>

                                <button type="button" class="btn btn-primary" onClick={()=>redirect('/editprofile/'+singledata.id)} >
                                    Edit Profile
                                </button>



                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="img-box">
                                <img src={singledata.img} width="100%" alt />
                            </div>
                        </div>






                    </div>
                </div>
                
            </section>
            {/* end about section */}
            <Footer/>
        </div>
        
    )
}

export default Profile