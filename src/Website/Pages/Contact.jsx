import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import {toast} from 'react-toastify';
import Header1 from '../Component/Header1'
import Footer from '../Component/Footer'

function Contact() {

    const redirect=useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('userid'))
        {
            redirect('/contact');
        }
    },[]);

    const [formvalue,setFormvalue]=useState({
        id:"",
        name:"",
        email:"",
        mobile:"",
        message:"",
    });

    const changeHandel=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(formvalue);
    }

    const validation=()=>{
        var result=true;
        if(formvalue.name=="")
        {
            toast.error('Name field is required !');
            result=false;
            return false;
        }
        if(formvalue.email=="")
        {
            toast.error('email field is required !');
            result=false;
            return false
        }
        
        if(formvalue.mobile=="")
        {
            toast.error('mobile field is required !');
            result=false;
            return false
        }
        if(formvalue.message=="")
        {
            toast.error('message field is required !');
            result=false;
            return false;
        }
        return result;
    }

    const submitHandel=async(e)=>{
        e.preventDefault();
        if (validation()) {
        const res= await axios.post(`http://localhost:3000/contact`,formvalue);
        setFormvalue({...formvalue,name:"",email:"",mobile:"",message:""});
        toast.success('Your Request is Done');
        return false;     
        }
 }

    return (
        <div>
            <Header1/>
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
                            <form action='' method='post' onSubmit={submitHandel}>
                                <div>
                                    <input type="text" name='name' className='form-control' value={formvalue.name} onChange={changeHandel}  placeholder="Name" />
                                </div>
                                <div>
                                    <input type="email" name='email' className='form-control' value={formvalue.email} onChange={changeHandel} placeholder="Email" />
                                </div>
                                <div>
                                    <input type="text" name='mobile' className='form-control' value={formvalue.mobile} onChange={changeHandel} placeholder="Phone Number" />
                                </div>
                                <div>
                                    <input type="text" name='message' className='form-control' value={formvalue.message} onChange={changeHandel}  placeholder="Message" />
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
                </div>
            </section>
        <Footer/>
        </div>
    )
}

export default Contact