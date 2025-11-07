import React, {  useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import Login from "./Login";cmd
// import Log from "./Log";cmd
import axios from "axios";
import "./Home.css";
// import { propTypes } from "react-bootstrap/esm/Image";cmd

// import { Email, Password } from "@mui/icons-material";cmd
export default function Home(props) {
  // const items = [];cmd
  // const totalCustomers = items.reduce(
  //   (total, items) => total + items.integer,
  //   0
  // );cmd

  const [fetch, setFetch] = useState(0);

  // const [customers, setCustomers] = useState([]);cmd
  useEffect(() => {
    // loadCustomer();
    all();
    // loadCustomers();
  }, []);

  // const loadCustomers = async () => {
  //   try {
  //     const result = await axios.get("http://localhost:8080/fetchAllCustomer");
  //     setCustomers(result.data.listCustomer);
  //     console.log(result.data);
  //   } catch (error) {
  //     console.error("Error loading customers:", error);
  //   }
  // };cmd
  const all = async () => {
    try {
      const resut = await axios.get("http://localhost:8080/CustomersCount");
      setFetch(resut.data.integer);
      console.log(resut.data);
    } catch (err) {
      console.log(err);
      console.log("set elkolkolkollkolrror");
    }
  };
  // var params=props.match.params;
  // let { eMail, Password } = useParams();cmd
  return (
    <div>
      <Container fluid className="con">
        {/* <div className="class"></div> */}

        {/* <Col>
            <div><h1>Welcome {}</h1></div></Col> */}
        {/* <div
             
            className="welcome"
            style={{ textAlign: "center", marginTop: "0px" }}
          >
            <h1 className="text-white ">Welcome :{eMail}{Password}</h1>

          </div> */}
        {/* </Row> */}
        {/* <Col style={{paddingLeft:"0px"}}>  */}

        {/* <Col className="life">
        </Col> */}
        {/* <div style={{height:"500px" }} className="bg-warning"> 
        <div className=" row bg-danger" style={{width:"400px",height:"400px"}}>  */}
        <Row className="mt-4"></Row>
        <Row className="headinsu mt-4">
          <Col>
            <div className="home2 border rounder  mt-7 shadow ">
              <div style={{ margnTop: "" }}>
                <h1>Insurance Management System</h1>
                <hr></hr>
                <p style={{ color: "" }}>
                  {" "}
                  <b>
                    {" "}
                    Welcome to My Insurance Company, There are {fetch} Customers In My Company.
                    we believe that securing your future should be simple,
                    transparent, and accessible to everyone. That's why we've
                    dedicated ourselves to revolutionizing the way you buy
                    insurance. We're not just a platform; we're your trusted
                    partner on the journey to financial security.
                  </b>
                </p>
                {/* <Col className=" custom bg-white border rounder  mt-5 shadow"> */}

                {/*// <div className=" custom bg-white border rounder  mt-5 shadow">
                <h4>My Customers : {fetch} members </h4> 
              </div>// */}

                {/* </Col> */}
              </div>
            </div>

            {/* </Col> */}
            {/* <Col> */}
            {/* <div 
             
            className='welcome'
            style={{textAlign:"center",marginTop:"0px"}}
            ><h1 className='text-white '>Welcome :{"Karthi"}</h1> */}
            {/* <div style={{marginTop:"-95px",paddingTop:"px"}} ><Log/></div> */}
            {/* </div> */}
            {/* </Col> */}

            {/* <div className="about"> 
          <Col className="col-md8">
            <h3>About us.</h3>
            <p className="aboutp"><b>
              An "About Us" section for insurance customers, often found on an
              insurance company's website, serves to inform policyholders and
              potential customers about the company's values, commitment to
              customer service, and the benefits of choosing their insurance
              products. Here's a template for an "About Us" section tailored to
              insurance customers: in My Insurance Company - Your Trusted
              Insurance Partner At My Company , we understand that
              insurance is not just a policy; it's a promise of protection and
              peace of mind. We're here to be your reliable partner in
              safeguarding what matters most to you.</b>
            </p>
            <Col className=" custom bg-white border rounder  mt-5 shadow">
              <div
              // className="custom  border rounder  mt-5 shadow"
              >
                <h4>My Customers : {fetch} members </h4>
              </div>
            </Col>
          </Col> 
        </div> */}
            {/* <div className="contact">
          <h3>Contact Us.</h3>
          <p><b> 
            Contact Us We value your feedback, questions, and concerns. Please
            don't hesitate to reach out to us anytime. You can contact our
            dedicated customer support team through our website, by phone, or by
            visiting one of our local offices. Thank you for choosing My Insurance
            Company as your insurance partner. We look forward to
            continuing to serve you and protect what matters most to you and
            your loved ones.</b>
          </p>
        </div>
        <div></div> */}
          </Col>

          <Col className="col col-lg-5 ">
            <div className="homeImg "></div>
          </Col>
        </Row>
        <Row className=" m-3 mb-3 whatr">
          <Col className="what col col-lg-4 "></Col>
          <Col className="mt-3 whatc">
            <h2 className="pt-2 bg-primary ">
              What is Insurance<hr></hr>
            </h2>
            <div className="whati">
              Insurance is a contract between an insurance company and the
              insured. The insurance company would agree to compensate the
              insured, in part or full, for a financial loss happening due to a
              covered event. On the other hand, the insured will agree to pay a
              premium cost for the cover. For example, a ship insured by an
              insurer for the value of its goods loses some of it into a storm.
              The insurance company covering the goods may compensate the
              shipping firm. The shipping firm would have to pay a nominal cost
              for the coverage as a premium for the insurance policy.
            </div>
          </Col>
        </Row>
        <div className="fullrc">
          <Row className="rc">
            <div className="pt-2 pb-1 type">
              <h2>Types of Insurance Coverage</h2>
            </div>

            <Col>
              <div className="insu border ">
                <div>
                  <div className="bg-primary pt-4">
                    <h3>1.Life Insurance</h3>
                    <hr></hr>
                  </div>
                  <div
                    className="cont"
                    style={{
                      marginTop: "25px",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    One can avail the life insurance in order to protect the
                    family due to premature death or death during the tenure of
                    the policy. It provides the family with a lump sum when the
                    insured person meets with an untimely death. This helps the
                    grieving family to battle with financial struggles that may
                    occur in absence of a breadwinner.
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="insu border white">
                <div className="bg-primary pt-4">
                  <h3>2. Health Insurance</h3>
                  <hr></hr>
                </div>
                <div
                  className="cont"
                  style={{
                    marginTop: "25px",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  You can buy health insurance for yourself or for your family
                  that may include your spouse, parents, siblings, and children.
                  Some insurance companies have tie-ups with hospitals. So here
                  you can use your policy number to avail of cashless services
                  in-network hospitals.
                  {/* In other cases, you can claim reimbursement for
              hospitalization and treatments. Do check the coverage of the type
              of disease/illness/health issue. Also, verify what type of costs
              are covered. */}
                </div>
              </div>
            </Col>
            <Col>
              <div className="insu border white">
                <div className="bg-primary pt-4">
                  <h3>3.Home Insurance</h3>
                  <hr></hr>
                </div>
                <div
                  className="cont"
                  style={{
                    marginTop: "25px",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  If man-made or natural calamities damage your valuable
                  property then this policy can cover the financial loss and
                  provide monetary aid. Losses due to theft, floods, or any
                  other mishaps can be alleviated.
                </div>
              </div>
            </Col>
            <Col>
              <div className="insu border white">
                <div className="bg-primary pt-4">
                  <h3>4.Vehicle Insurance</h3>
                  <hr></hr>
                </div>
                <div
                  className="cont"
                  style={{
                    marginTop: "25px",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  This is one of the mandatory policies in current times. First
                  of all, it protects your valuable asset against road accidents
                  or any other damage and covers the losses. Secondly, the
                  traffic rules suggest you carry insurance papers while
                  driving.
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* <Row>
          <Col>
          <div className="i1"></div></Col>
          <Col>
          <div className="i3"></div>
          </Col>
          <Col>
          <div className="i2"></div></Col>
          <Col>
          <div className="i4"></div></Col>
        </Row> */}
        {/* <div className="row"> */}
        {/* <div className="row p-lg-0 pb-4 pl-0 mt-2 bg-primary">
            <div className="sec-benefits">
              <h2 className="s-heading text-left">What Our Customers Have to Say</h2> */}
        {/* <style>.articles-heading {{overflow:hidden}}</style> */}
        {/* <div className="row pb-0 healthplans healthCustomerReview" style={{borderBottom:"0px",position:"relative"}}>
                <div className="splide_track">
                  <div className="splide_list">
                    <div className="col-lg-3 col-md-6 col-12 mb-2 px-1 splide_slide">
                      <div className="bg-white p-2" style={{borderRadius:"5px",boxShadow:"0 0 8px 0 rgb(0 0 0 / 14%)"}}>
                        <div className="ratedTag">
                          <span>
                            <i className="fa fa-star" style={{fontSize:"12px !important",color:"#fff !important"}}aria-hidden="true"></i>
                            <i className="fa fa-star" style={{fontSize:"12px !important",color:"#fff !important"}}aria-hidden="true"></i>
                            <i className="fa fa-star" style={{fontSize:"12px !important",color:"#fff !important"}}aria-hidden="true"></i>
                            <i className="fa fa-star" style={{fontSize:"12px !important",color:"#fff !important"}}aria-hidden="true"></i>
                            <i className="fa fa-star" style={{fontSize:"12px !important",color:"#fff !important"}}aria-hidden="true"></i>
                           
                          </span>
                        </div>
                        <p className="mb-0 text-right">
                          <i className="fa fa-quote-right" aria-hidden="true"style={{position:"relative",top:"-7px",fontSize:"35px"}}></i>
                        </p>
                        <div class="row m-0 w-100 pt-2 pb-0"  style={{borderBottom:"0px"}}>
                          <div className="col-3 px-0 text-center">
                            img
                          </div>
                          <div className="col-9 px-1">
                            <p className="mb-0" style={{fontSize:'13px',fontWeight:'700',lineHeight:'1',paddingTop:'8px',overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>Thakur rudra pratap singh</p>
                            <p className="mb-0" style={{fontSize:"12px",borderBottom:"2px solid #ccc",overflow:"hidden",whiteSpace:"nowrap"}}>
                              Bengalure
                            </p>
                            <p className="mb-0">
                              <span style={{float:"right",fontSize:"10px",lineHeight:"2"}}>
                                Augest 25,2023
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="cont bg-white" style={{borderRadius:"5px"}}>
                        <p class="mb-0" style={{fontSize:"13px",padding:"15px 9px",lineHeight:"19px",letterSpacing:"0.5px",textAlign:"left",height:" 170px"}}>
                        	a good experience in this company very fast and helpfull customer service and support one of Advisor Mr. Gulshan very talented advisor and resolved my all questions and doubts
thank you policyx...                        </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mb-2 px-1 splide__slide">
                      <div className="bg-white p-2"style={{borderRadius:"5px",boxShadow:"0 0 8px 0 rgb(0 0 0 / 14%)"}}>
                        <div className="ratedTag">
                          <span>
                            <i className="fa fa-star" style={{fontSize:"12px !important",color:"#fff !important"}}aria-hidden='true'></i>
                            <i className="fa fa-star" style={{fontSize:"12px !important",color:"#fff !important"}}aria-hidden='true'></i>
                            <i className="fa fa-star" style={{fontSize:"12px !important",color:"#fff !important"}}aria-hidden='true'></i>
                            <i className="fa fa-star" style={{fontSize:"12px !important",color:"#fff !important"}}aria-hidden='true'></i>
                            <i className="fa fa-star" style={{fontSize:"12px !important",color:"#fff !important"}}aria-hidden='true'></i>
                          </span>
                            </div>
                        <p className="mb-0 text-right">
                          <i className="fa fa-quote-right" aria-hidden="true"style={{position:"relative",top:"-7px",fontSize:"35px"}}></i>
                        </p>
                        <div class="row m-0 w-100 pt-2 pb-0"  style={{borderBottom:"0px"}}>
                          <div className="col-3 px-0 text-center">
                            img
                          </div>
                          <div className="col-9 px-1">
                            <p className="mb-0" style={{fontSize:'13px',fontWeight:'700',lineHeight:'1',paddingTop:'8px',overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>Thakur rudra pratap singh</p>
                            <p className="mb-0" style={{fontSize:"12px",borderBottom:"2px solid #ccc",overflow:"hidden",whiteSpace:"nowrap"}}>
                              Bengalure
                            </p>
                            <p className="mb-0">
                              <span style={{float:"right",fontSize:"10px",lineHeight:"2"}}>
                                Augest 25,2023
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="cont bg-white" style={{borderRadius:"5px"}}>
                        <p class="mb-0" style={{fontSize:"13px",padding:"15px 9px",lineHeight:"19px",letterSpacing:"0.5px",textAlign:"left",height:" 170px"}}>
                        	a good experience in this company very fast and helpfull customer service and support one of Advisor Mr. Gulshan very talented advisor and resolved my all questions and doubts
thank you policyx...                        </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        {/* </div> */}
      </Container>
    </div>
  );
}
