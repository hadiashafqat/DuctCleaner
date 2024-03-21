import React from "react";


export default function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar--left">
                <h1>Duct Cleaning</h1>
            </div>
            <div className="navbar--mid">
                <h6>HOME</h6>
                <h6>ABOUT</h6>
                <h6>CONTACT</h6>
                <h6>SERVICES</h6>
                <h6>PRICING</h6>
            </div>
            <div className="book-div">
                <h6 className="book">BOOK NOW</h6>
            </div>
        </div>
    )
}