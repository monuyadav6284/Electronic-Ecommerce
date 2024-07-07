import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header1 from '../Component/Header1';
import Footer from '../Component/Footer';


function View_service() {
    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);

    const {id}=useParams();

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/services?cate_id=${id}`);
        console.log(res);
        setData(res.data);
    }
    return (
        <div>
            <Header1/>
            <section className="service_section layout_padding">
                <div className="container ">
                    <div className="heading_container heading_center">
                        <h2> Our Services </h2>
                    </div>
                    <div className="row">
                       {
                        data.map((value,index)=>{
                            return(
                                <div key={index} className="col-sm-6 col-md-4 mx-auto">
                                <div className="box ">
                                    
                                        <img src={value.img} width="100%" height="200px" alt />
                                    
                                    <div className="detail-box">
                                        <h5>{value.name}</h5>
                                        <h5>{value.desc}</h5>
                                        <h5>{value.price}/- Rs</h5>
                                        
                                    </div>
                                </div>
                            </div>
                            )
                        })
                       }  
                        
                    </div>
                    
                </div>
            </section>
       <Footer/>
        </div>

    )
}

export default View_service