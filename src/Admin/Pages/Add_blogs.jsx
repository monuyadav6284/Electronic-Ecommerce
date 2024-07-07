import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import Adminheader  from '../Component/Adminheader';
import Adminfooter from '../Component/Adminfooter';

function Add_blogs() {

    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/blog`);
        console.log(res.data);
        setData(res.data);
    }

    const [formvalue,setFormvalue]=useState({
        id:"",
        name:"",
        desc:"",
        img:""
    });

    const changeHandel=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(formvalue);
    }

    const validation=(e)=>{
        var result=true;
       
        if(formvalue.name=="")
        {
            toast('Name field is required !');
            result=false;
        }
        if(formvalue.desc=="")
        {
            toast('Description field is required !');
            result=false;
        }
       
        if(formvalue.img=="")
        {
            toast('Img field is required !');
            result=false;
        }
        return result;
    }
    const submitHandel=async(e)=>{
        e.preventDefault();
        if(validation())
        {
            const res= await axios.post(`http://localhost:3000/blog`,formvalue);
            setFormvalue({...formvalue,name:"",desc:"",img:""});
            toast.success('Blog add success');
            return false;
        }
    }

  return (
    <>
    <Adminheader/>
    <div class="panel-body">
            <div class="row">
                <div class="col-md-6 container-fluid">
                <h4 className="mb"><i className="fa fa-angle-right" /> Add Blog</h4>
                                <form className="form-horizontal style-form" method="get">
                                    <div className="form-group">
                                        <label className="col-sm-2 col-sm-2 control-label">Blog Name</label>
                                        <div className="col-sm-10">
                                            <input type="text" name="name" onChange={changeHandel} value={formvalue.name} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 col-sm-2 control-label">Description</label>
                                        <div className="col-sm-10">
                                            <textarea type="text" name="desc" onChange={changeHandel} value={formvalue.desc} className="form-control" ></textarea>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label className="col-sm-2 col-sm-2 control-label">Image URL</label>
                                        <div className="col-sm-10">
                                            <input type="url" name="img" onChange={changeHandel} value={formvalue.img} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 col-sm-2 control-label">
                                        <button type="submit" style={{ backgroundColor: "red" }} onClick={submitHandel} className="btn btn-theme">Submit</button>
                                        </label>
                                    </div>
                                </form>
                   
                </div>
            </div>
        </div>
        <Adminfooter/>
        </>
  )
}

export default Add_blogs