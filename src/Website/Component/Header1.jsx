import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Header1() {
    const redirect = useNavigate();

    const userlogout = () => {
        localStorage.removeItem('uname');
        localStorage.removeItem('email');
        toast.success('Logout Succes');
        redirect('/');

    }



    return (
        <div>
            <header className="header_section">
                <div className="container">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <NavLink className="navbar-brand" to="index">
                            <img src="images/logo.png" alt />
                            <span>
                                Electrochip
                            </span>
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="s-1"> </span>
                            <span className="s-2"> </span>
                            <span className="s-3"> </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                <ul className="navbar-nav  ">
                                    <li className="nav-item ">
                                        <NavLink className="nav-link" to="/">Home </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about"> About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/service"> Service </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/blog"> Blog </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact"> Contact </NavLink>
                                    </li>
                                    {(() => {
                                        if (localStorage.getItem('uname')) {
                                            return (
                                               
                                                <>
                                                <li className="nav-item">
                                                  <NavLink className="nav-link" to="/profile">
                                                    <i className='fa fa-user'> {localStorage.getItem('uname')}  Profile</i>
                                                  </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                  <a className="nav-link" href="javascript:void(0)" onClick={userlogout}>Logout</a>
                                                </li>
                                                
                                              </>
                                               
                                            )
                                        }
                                        else {
                                            return (<>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="/login">Login</NavLink>
                                                </li>
                                                
                                            </>
                                            )
                                        }
                                    })()}

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            {/* end header section */}
        </div>


    )
}

export default Header1