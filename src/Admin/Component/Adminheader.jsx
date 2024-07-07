import React, { useEffect } from 'react'
import { NavLink, Link,useNavigate } from 'react-router-dom'
import { Helmet } from "react-helmet";
import { toast } from 'react-toastify';

function Adminheader() {

    const redirect=useNavigate();
    useEffect(()=>{
        if(!(localStorage.getItem('adminid')))
        {
            redirect('/admin');
        }
    },[]);

    const adminlogout = () => {
        localStorage.removeItem('aname');
        localStorage.removeItem('adminid');
        toast.success('Logout Succes');
        redirect('/admin');
    
      }





    return (
        <div>
            <Helmet>
            <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
             
                <title>Admin dashboard</title>
                {/* BOOTSTRAP STYLES*/}
                <link href="assets/css/bootstrap.css" rel="stylesheet" />
                {/* FONTAWESOME STYLES*/}
                <link href="assets/css/font-awesome.css" rel="stylesheet" />
                {/* MORRIS CHART STYLES*/}
                <link href="assets/js/morris/morris-0.4.3.min.css" rel="stylesheet" />
                {/* CUSTOM STYLES*/}
                <link href="assets/css/custom.css" rel="stylesheet" />
                <link href="assets/css/basic.css" rel="stylesheet" />
    
                {/* GOOGLE FONTS*/}
                <link href="http://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" />
                

               


            </Helmet>
            <div>
                <nav className="navbar navbar-default navbar-cls-top " role="navigation" style={{ marginBottom: 0 }}>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="index.html">Binary admin</a>
                    </div>
                    <div style={{ color: 'white', padding: '15px 50px 5px 50px', float: 'right', fontSize: 16 }}> Last access : 30 May 2014 &nbsp; <a  href="javascript:void(0)" onClick={adminlogout} className="btn btn-danger square-btn-adjust">Logout</a> </div>
                </nav>
                {/* /. NAV TOP  */}
                <nav className="navbar-default navbar-side" role="navigation">
                    <div className="sidebar-collapse">
                        <ul className="nav" id="main-menu">
                            <li className="text-center">
                                <img src="assets/img/find_user.png" className="user-image img-responsive" />
                            </li>
                            <li>
                                <NavLink className="active-menu" to="/admindashboard"><i className="fa fa-dashboard fa-3x" /> Dashboard</NavLink>
                            </li>
                            <li>
                                <a href="ui.html"><i className="fa fa-desktop fa-3x" /> Categories</a>
                                <ul className="nav nav-second-level">
                                    <li>
                                        <NavLink to="/add_categories">Add Categories</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/manage_categories">Manage Categories</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="tab-panel.html"><i className="fa fa-qrcode fa-3x" /> Services</a>
                                <ul className="nav nav-second-level">
                                    <li>
                                    <NavLink to="/add_services">Add Services</NavLink>
                                    </li>
                                    <li>
                                    <NavLink to="/manage_services">Manage Services</NavLink>    
                                    </li>
                                </ul>
                            </li>
                            
                            <li>
                                <a href="chart.html"><i className="fa fa-bar-chart-o fa-3x" /> Our  Blogs </a>
                                <ul className="nav nav-second-level">
                                    <li>
                                    <NavLink to="/add_blogs">Add Blogs</NavLink>
                                    </li>
                                    <li>
                                    <NavLink to="/manage_blogs">Manage Blogs</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="tab-panel.html"><i className="fa fa-qrcode fa-3x" /> Employee</a>
                                <ul className="nav nav-second-level">
                                    <li>
                                    <NavLink to="/add_employee">Add Employee</NavLink>
                                    </li>
                                    <li>
                                    <NavLink to="/manage_employee">Manage Employee</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to="/manage_contact"><i className="fa fa-table fa-3x" /> Contact Data </NavLink>
                            </li>
                            <li>
                                <NavLink to="/manage_review"><i className="fa fa-edit fa-3x" />  Review Forms</NavLink>
                            </li>
                            <li>
                                <NavLink to="/manage_user"><i className="fa fa-edit fa-3x" /> Manage Users</NavLink>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-sitemap fa-3x" /> Multi-Level Dropdown<span className="fa arrow" /></a>
                                <ul className="nav nav-second-level">
                                    <li>
                                        <a href="#">Second Level Link</a>
                                    </li>
                                    <li>
                                        <a href="#">Second Level Link</a>
                                    </li>
                                    <li>
                                        <a href="#">Second Level Link<span className="fa arrow" /></a>
                                        <ul className="nav nav-third-level">
                                            <li>
                                                <a href="#">Third Level Link</a>
                                            </li>
                                            <li>
                                                <a href="#">Third Level Link</a>
                                            </li>
                                            <li>
                                                <a href="#">Third Level Link</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
                <Helmet>
                   
                    <script src="assets/js/bootstrap.min.js"></script>

                    <script src="assets/js/morris/raphael-2.1.0.min.js"></script>
                    <script src="assets/js/morris/morris.js"></script>

                   
                   
                   
                    <script src="assets/js/custom.js"></script>
                    <script src="assets/js/jquery-1.10.2.js"></script>    
                    <script src="assets/js/jquery.metisMenu.js"></script>
                    
                </Helmet>

               </div>

        </div>
    )
}

export default Adminheader