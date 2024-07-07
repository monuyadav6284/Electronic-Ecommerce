import React from 'react'
import { Helmet } from 'react-helmet'

function Admindashboard() {
    return (    
        <div>
            <Helmet>
                    <script src="assets/js/bootstrap.min.js"></script>

                   <script src="assets/js/morris/raphael-2.1.0.min.js"></script>
                   <script src="assets/js/morris/morris.js"></script>
                   <script src="js/jquery-3.4.1.min.js"></script>
               </Helmet>

            
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Admin Dashboard</h2>
                            <h5>Welcome Jhon Deo , Love to see you back. </h5>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <hr />
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="panel panel-back noti-box">
                                <span className="icon-box bg-color-red set-icon">
                                    <i className="fa fa-envelope-o" />
                                </span>
                                <div className="text-box">
                                    <p className="main-text">120 New</p>
                                    <p className="text-muted">Messages</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="panel panel-back noti-box">
                                <span className="icon-box bg-color-green set-icon">
                                    <i className="fa fa-bars" />
                                </span>
                                <div className="text-box">
                                    <p className="main-text">30 Tasks</p>
                                    <p className="text-muted">Remaining</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="panel panel-back noti-box">
                                <span className="icon-box bg-color-blue set-icon">
                                    <i className="fa fa-bell-o" />
                                </span>
                                <div className="text-box">
                                    <p className="main-text">240 New</p>
                                    <p className="text-muted">Notifications</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="panel panel-back noti-box">
                                <span className="icon-box bg-color-brown set-icon">
                                    <i className="fa fa-rocket" />
                                </span>
                                <div className="text-box">
                                    <p className="main-text">3 Orders</p>
                                    <p className="text-muted">Pending</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <hr />
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="panel panel-back noti-box">
                                <span className="icon-box bg-color-blue">
                                    <i className="fa fa-warning" />
                                </span>
                                <div className="text-box">
                                    <p className="main-text">52 Important Issues to Fix </p>
                                    <p className="text-muted">Please fix these issues to work smooth</p>
                                    <p className="text-muted">Time Left: 30 mins</p>
                                    <hr />
                                    <p className="text-muted">
                                        <span className="text-muted color-bottom-txt"><i className="fa fa-edit" />
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit gthn.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit gthn.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className="panel back-dash">
                                <i className="fa fa-dashboard fa-3x" /><strong> &nbsp; SPEED</strong>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing sit ametsit amet elit ftr. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12 col-xs-12 ">
                            <div className="panel ">
                                <div className="main-temp-back">
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-xs-6"> <i className="fa fa-cloud fa-3x" /> Newyork City </div>
                                            <div className="col-xs-6">
                                                <div className="text-temp"> 10° </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-back noti-box">
                                <span className="icon-box bg-color-green set-icon">
                                    <i className="fa fa-desktop" />
                                </span>
                                <div className="text-box">
                                    <p className="main-text">Display</p>
                                    <p className="text-muted">Looking Good</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-9 col-sm-12 col-xs-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Bar Chart Example
                                </div>
                                <div className="panel-body">
                                    <div id="morris-bar-chart" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className="panel panel-primary text-center no-boder bg-color-green">
                                <div className="panel-body">
                                    <i className="fa fa-bar-chart-o fa-5x" />
                                    <h3>120 GB </h3>
                                </div>
                                <div className="panel-footer back-footer-green">
                                    Disk Space Available
                                </div>
                            </div>
                            <div className="panel panel-primary text-center no-boder bg-color-red">
                                <div className="panel-body">
                                    <i className="fa fa-edit fa-5x" />
                                    <h3>20,000 </h3>
                                </div>
                                <div className="panel-footer back-footer-red">
                                    Articles Pending
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className="panel panel-primary text-center no-boder bg-color-green">
                                <div className="panel-body">
                                    <i className="fa fa-comments-o fa-5x" />
                                    <h4>200 New Comments </h4>
                                    <h4>See All Comments</h4>
                                </div>
                                <div className="panel-footer back-footer-green">
                                    <i className="fa fa-rocket fa-5x" />
                                    Lorem ipsum dolor sit amet sit sit, consectetur adipiscing elitsit sit gthn ipsum dolor sit amet ipsum dolor sit amet
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-12 col-xs-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Responsive Table Example
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                    <th>User No.</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    <td>100090</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                    <td>100090</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                    <td>100090</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    <td>100090</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                    <td>100090</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                    <td>100090</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                  
        </div>
    )
}

export default Admindashboard