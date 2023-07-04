import React from "react";
import { ReactDOM } from "react";
const pageheader = (props) => {
    return (
        <>
        <div className="page-header">
            <img src={props.imgsrc}/>
            <div className="page-headings">
                <h2>{props.pgHdng}</h2>
                <p>{props.pgDesc}</p>
            </div>
        </div>
        </>
    );
}
export default pageheader;
