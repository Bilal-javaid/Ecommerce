import React from "react";
const Home = () => {
    return (
        <>
        <div className="container-fluid bg-primary bg">
            <div className="container p-3">
                <div className="row d-flex align-items-center" >
                    <div className="col-lg-6 my-4">
                        <h4 className="text-warning fw-bold" style={{fontSize: "33px" }}>Automate your business with worldclass technology!</h4>
                        <p className="my-0 text-light fw-bold">CUSTOMER RELATIONSHIP MANAGEMENT (CRM)</p>
                        <p className="my-0 text-light fw-bold">ENTERPRISE RESOURCES PLANNING (ERP)</p>
                        <p className="my-0 text-light fw-bold">LEARNING MANAGEMENT (LMS)</p>
                    </div>
                    <div className="col-lg-6 hd-img my-4">
                        <img src="../images/heroImg.png" alt="images"/>
                    </div>
                </div>
            </div>
        </div>
        {/* HOME PAGE VIDEO SECTION */}
        
        </>
    );
}
export default Home;