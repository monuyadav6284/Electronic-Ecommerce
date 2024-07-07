import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header1 from "../Component/Header1";
import Footer from "../Component/Footer";

function Service() {
  const redirect = useNavigate();
  useEffect(() => {
    fetch();
  }, []);

  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/categories`);
    console.log(res);
    setData(res.data);
  };

  return (
    <div>
      <Header1 />
      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Our Services</h2>

            <img src="images/plug.png" alt />
          </div>
          <div className="service_container">
            {data.map((value, index) => {
              return (
                <div key={index} className="col-sm-6 col-md-4 mx-auto">
                  <a
                    href="javascript:void(0)"
                    onClick={() => redirect("/view_service/" + value.id)}
                  >
                    <div className="box ">
                      <img src={value.img} width="100%" height="200px" alt />
                      <div className="detail-box">
                        <h5>{value.name}</h5>
                        <p>{value.desc}</p>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
            <div className="box">
              <div className="img-box">
                <img src="images/s1.png" className="img1" alt />
              </div>
              <div className="detail-box">
                <h5>Equipment installation</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available,
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/s2.png" className="img1" alt />
              </div>
              <div className="detail-box">
                <h5>Windmill Energy</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available,
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/s3.png" className="img1" alt />
              </div>
              <div className="detail-box">
                <h5>Equipment Maintenance</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available,
                </p>
              </div>
            </div>
            <div className="box ">
              <div className="img-box">
                <img src="images/s4.png" className="img1" alt />
              </div>
              <div className="detail-box">
                <h5>Offshore Engineering</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available,
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/s5.png" className="img1" alt />
              </div>
              <div className="detail-box">
                <h5>Electrical Wiring</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available,
                </p>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href>Read More</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Service;
