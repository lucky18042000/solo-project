import React from "react";
import Image from "../assets/Image.jpg"
export default function(){
    return(
        <div className="profile">
            <img src={Image} alt="logo"></img>
            <h5 className="profile--name">Laura Smith</h5>
            <p className="profile--role">Frontend Developer</p>
            <p className="profile--website">laurasmith.website</p>
        </div>
    )
}