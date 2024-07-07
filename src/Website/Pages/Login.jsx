import axios from 'axios';
import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import Header1 from '../Component/Header1'
import Footer from '../Component/Footer'

function Login() {


    const redirect=useNavigate();

    const [formvalue, setFormvalue] = useState({
        email: "",
        password: ""
    });

    const changeHandel = (e) => {
        setFormvalue({...formvalue,[e.target.name]:e.target.value });
        console.log(formvalue);
    }

    const validation = () => {
        var result = true;

        if (formvalue.email == "") {
            toast.error('email field is required !');
            result = false;
        }
        if (formvalue.password == "") {
            toast.error('password field is required !');
            result = false;
        }

        return result;
    }
    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
            if(res.data.length>0)
            {
                if(res.data[0].password==formvalue.password)
                {
                        // session 
                        localStorage.setItem('uname',res.data[0].name);
                        localStorage.setItem('userid',res.data[0].id);
                        toast.success('Login Success');
                        redirect('/');
                }
                else
                {
                    setFormvalue({...formvalue,email:"",password:""});
                    toast.error("Password not match");
                    return false;    
                }
            }
            else
            {
                setFormvalue({...formvalue,email:"",password:""});
                toast.error("Email Doesn't Exit");
                return false;
            }
        }
    }
    return (
        <div>
            <Header1/>
            <section className="contact_section layout_padding">    
                <div className="container ">
                    <div className="heading_container">
                        <h2>
                            LOGIN
                        </h2>
                        <img src="images/plug.png" alt />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <form action="" method="post" onSubmit={ submitHandel}>    
                                <div>
                                    <input type="email" name='email' className='form-control' value={formvalue.email} onChange={changeHandel} placeholder="Enter Your Email" />
                                </div>
                                <div>
                                    <input type="password" name='password' className='form-control' value={formvalue.password} onChange={changeHandel} placeholder="Enter Your Password" />
                                </div>
                                
                                <div className="d-flex ">
                                    <button  type='submit' name='submit'>
                                        LOGIN
                                    </button>
                                    <Link to="/signup">If you not Registered then Click here</Link>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Login