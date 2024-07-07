import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Adminheader from '../Component/Adminheader';
import Adminfooter from '../Component/Adminfooter';




function Add_categories() {

    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        img: "",
        desc: ""
    });

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const validation = () => {
        var result = true;
        if (formvalue.name == "") {
            toast('Name field is required !');
            result = false;
        }
        if (formvalue.img == "") {
            toast('Img field is required !');
            result = false;
        }
        if (formvalue.desc == "") {
            toast('Description field is required !');
            result = false;
        }
        return result;
    }
    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/categories`, formvalue);
            setFormvalue({ ...formvalue, name: "", img: "" });
            toast.success('Categories add success');
            return false;
        }
    }
    return (
        <>
            <Adminheader />
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6 container-fluid">
                        <h3>Add Categories Form </h3>
                        <form role="form">
                            <div class="form-group">
                                <label className="col-sm-2 col-sm-2 control-label">Categories</label>
                                <div>
                                    <input type="text" name="name" onChange={changeHandel} value={formvalue.name} className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 col-sm-2 control-label">Image URL</label>
                                <div >
                                    <input type="url" name="img" onChange={changeHandel} value={formvalue.img} className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 col-sm-2 control-label">Description</label>
                                <div >
                                    <input type="textarea" name="desc" onChange={changeHandel} value={formvalue.desc} className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 col-sm-2 control-label">
                                    <button type="submit" onClick={submitHandel} style={{ backgroundColor: "red" }} className="btn btn-theme">Save</button>
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

export default Add_categories