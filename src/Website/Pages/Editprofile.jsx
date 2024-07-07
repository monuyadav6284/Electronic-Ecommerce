import React,{useEffect, useState} from 'react'
import { Link, redirect, useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import Header1 from '../Component/Header1'
import Footer from '../Component/Footer'



function Editprofile() {

    const redirect=useNavigate();

    useEffect(()=>{
        if(!(localStorage.getItem('userid')))
        {
            redirect('/');
        }
        else
        {
            editHandel()
        }
    },[]);

    const [formvalue,setFormvalue]=useState({
        name:"",
        email:"",
        mobile:"",
        img:"",
    });
    
    const {id}=useParams()  // get url iD by useParams() hook
    const editHandel = async () => {
        const res = await axios.get(`http://localhost:3000/user/${id}`);
        setFormvalue(res.data);
        console.log(res.data);
    }


    const changeHandel=(e)=>{
        setFormvalue({...formvalue,[e.target.name]:e.target.value});
        console.log(formvalue);
    }

    const validation=()=>{
        var result=true;
        if(formvalue.name=="")
        {
            alert('Name field is required !');
            result=false;
        }
        if(formvalue.email=="")
        {
            alert('email field is required !');
            result=false;
        }
        if(formvalue.mobile=="")
        {
            alert('mobile field is required !');
            result=false;
        }
        if(formvalue.img=="")
        {
            alert('Img field is required !');
            result=false;
        }
        return result;
    }
    const submitHandel=async(e)=>{
        e.preventDefault();
        if(validation())
        {
            const res= await axios.patch(`http://localhost:3000/user/${id}`,formvalue);
            setFormvalue({...formvalue,name:"",email:"",password:"",mobile:"",img:""});
            toast.success('Update success');
            redirect('/profile');
        }
    }

    return (
        <div>
            <Header1/>
            <section className="contact_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Edit Profile
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <form action="" method='post' onSubmit={submitHandel}>
                                <div>
                                    <input type="text" name='name' className='form-control' value={formvalue.name} onChange={changeHandel} placeholder="Name" />
                                </div>
                                <div>
                                    <input type="email" name='email' className='form-control' value={formvalue.email} onChange={changeHandel} placeholder="email" />
                                </div>
                                
                                <div>
                                    <input type="number" name='mobile' className='form-control' value={formvalue.mobile} onChange={changeHandel} placeholder="mobile" />
                                </div>
                                <div>
                                    <input type="url" name='img' className='form-control' value={formvalue.img} onChange={changeHandel} placeholder="Image" />
                                </div>
                                <div className="d-flex ">
                                    <button type='submit' name='submit' >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </section>
             {/* end contact section */}
             <Footer/>
        </div>

    )
}

export default Editprofile