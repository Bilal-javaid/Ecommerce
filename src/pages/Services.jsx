import React from "react";
import PageHeader from "./PageHeader";
import Card from "./Card";
import Sdata from "./Sdata";
const services = () => {
    return (
        <>
           <PageHeader
             imgsrc={"../images/about-header.jpg"} 
             pgHdng={"Services"}
             pgDesc={"If you have any query than text me."}
             />
            <div className="container">
                <div className="row gy-4">
                    {
                        Sdata.map((val , ind) => {
                            return <Card key={ind}
                            cardimgsrc={val.cardimgsrc} 
                            cardtitle={val.cardtitle}
                            desc={val.desc} 
                            btnLink={val.btnLink}/>
                        })
                    }
                    
                </div>
            </div>
        </>
    );
}
export default services;
