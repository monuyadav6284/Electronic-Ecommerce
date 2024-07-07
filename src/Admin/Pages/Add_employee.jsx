import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import Adminheader from '../Component/Adminheader';
import Adminfooter from '../Component/Adminfooter';



function Add_employee() {

  useEffect(() => {
    fetch();
  }, []);

  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/employee`);
    console.log(res.data);
    setData(res.data);
  }

  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
    status: ""
  });

  const changeHandel = (e) => {
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
    console.log(formvalue);
  }

  const validation = (e) => {
    var result = true;
    if (formvalue.name == "") {
      toast('Name field is required !');
      result = false;
    }
    if (formvalue.email == "") {
      toast('Email field is required !');
      result = false;
    }
    if (formvalue.password == "") {
      toast('Password field is required !');
      result = false;
    }
    if (formvalue.mobile == "") {
      toast('Mobile field is required !');
      result = false;
    }
    return result;
  }
  const submitHandel = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.post(`http://localhost:3000/employee`, formvalue);
      setFormvalue({ ...formvalue, name: "", email: "", password: "", mobile: "" });
      toast.success('Employee added success');
      return false;
    }
  }

  return (
    <>
      <Adminheader />
      <div class="panel-body">
        <div class="row">
          <div class="col-md-6 container-fluid">
            <h4 className="mb"><i className="fa fa-angle-right" /> Add Employee</h4>
            <form className="form-horizontal style-form" method="get">
              <div className="form-group">
                <label className="col-sm-2 col-sm-2 control-label">Name</label>
                <div className="col-sm-10">
                  <input type="text" onChange={changeHandel} value={formvalue.name} name="name" className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 col-sm-2 control-label">E-mail</label>
                <div className="col-sm-10">
                  <input type="email" name="email" onChange={changeHandel} value={formvalue.email} className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 col-sm-2 control-label">Password</label>
                <div className="col-sm-10">
                  <input type="password" onChange={changeHandel} value={formvalue.password} name="password" className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 col-sm-2 control-label">mobile</label>
                <div className="col-sm-10">
                  <input type="number" name="mobile" onChange={changeHandel} value={formvalue.mobile} className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 col-sm-2 control-label">
                  <button type="submit" style={{ backgroundColor: "red" }} onChange={submitHandel} className="btn btn-theme">Sign in</button>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Adminfooter />
    </>
  )
}

export default Add_employee