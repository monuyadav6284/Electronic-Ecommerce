import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import Adminheader from '../Component/Adminheader';
import Adminfooter from '../Component/Adminfooter';


function Manage_blogs() {


    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/blog`);
        console.log(res.data);
        setData(res.data);
    }

    const deleteid = async (id) => {
        const res = await axios.delete(`http://localhost:3000/blog/${id}`);
        //console.log(res);
        fetch();
    }


    const status = async (id) => {
        const res = await axios.get(`http://localhost:3000/blog/${id}`);
        if (res.data.status == "Block") {
            const res = await axios.patch(`http://localhost:3000/blog/${id}`, { status: "Unblock" });
            toast.success('Status Unblock success');
            fetch();
        }
        else {
            const res = await axios.patch(`http://localhost:3000/blog/${id}`, { status: "Block" });
            toast.success('Status Block success');
            localStorage.removeItem('userid');
            localStorage.removeItem('uname');
            fetch();
        }
    }


    return (
        <>
            <Adminheader />
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-7 container-fluid">
                        <h4><i className="fa fa-angle-right" /> Manage Services</h4><hr /><table class="col-md-1" className="table table-striped table-advance table-hover ">
                            <thead>
                                <tr>
                                    <th><i className="fa fa-bullhorn" /> ID</th>
                                    <th>Name</th>
                                    <th>Image </th>
                                    <th>Description</th>
                                    <th><i className=" fa fa-edit" /> Action</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((value, index, arr) => {
                                        return (
                                            <tr key={index}>
                                                <td>{value.id}</td>
                                                <td>{value.name}</td>
                                                <td><img src={value.img} width="50px" alt="" /></td>
                                                <td>{value.desc}</td>

                                                <td>
                                                    <button className="btn btn-success btn-xs" onClick={() => status(value.id)} ><i className="fa fa-check" /></button>
                                                    <button className="btn btn-primary btn-xs"><i className="fa fa-pencil" /></button>
                                                    <button className="btn btn-danger btn-xs"><i className="fa fa-trash-o " onClick={() => deleteid(value.id)} /></button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Adminfooter />
        </>
    )
}

export default Manage_blogs