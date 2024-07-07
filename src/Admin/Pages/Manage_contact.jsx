import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Adminheader from '../Component/Adminheader';
import Adminfooter from '../Component/Adminfooter';


function Manage_contact() {

    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/contact`);
        console.log(res.data);
        setData(res.data);
    }


    const deleteid = async (id) => {
        const res = await axios.delete(`http://localhost:3000/contact/${id}`);
        //console.log(res);
        fetch();
    }





    return (
        <>
            <Adminheader />
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-7 container-fluid">
                        <h4><i className="fa fa-angle-right" /> Manage Contact</h4>
                        <hr />
                        <table className="table table-striped table-advance table-hover">
                            <thead>
                                <tr>
                                    <th><i className="fa fa-bullhorn" /> ID</th>
                                    <th>Name</th>
                                    <th>Email </th>
                                    <th>Mobile </th>
                                    <th>Message</th>
                                    <th>Action</th>
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
                                                <td>{value.email}</td>
                                                <td>{value.mobile}</td>
                                                <td>{value.message}</td>
                                                <td>
                                                    <button className="btn btn-danger btn-xs"><i className="fa fa-trash-o" onClick={() => deleteid(value.id)} /></button>
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

export default Manage_contact