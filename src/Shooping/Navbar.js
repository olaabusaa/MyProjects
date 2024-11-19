import React from "react";
import  Nav from "react-bootstrap/Nav"
import {NavLink} from "react-router-dom";
import Store from "./Store";
import About from "./About";
import Button from "react-bootstrap/Button";
import NavbarBs from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function Navbar(){
    return(
        <NavbarBs sticky="top" className="navbar navbar-expand-sm bg-white shadow-sm">
            <Container className="container-fluid ">
                <Nav className="me-auto">

                    < Nav.Link href="/Home" ><h6>Home</h6> </Nav.Link>

                        < Nav.Link href="/Store" ><h6>Store</h6> </Nav.Link>

                            < Nav.Link href="/About"> <h6>About</h6> </Nav.Link>

                    </Nav>


            </Container>
            <Button className="rounded-circle " style={{width:"45px",height:"45px"}}>
                <a href="/Cart" style={{textDecoration:"none",color:"white"}} ><i
                className="fa-solid fa-cart-shopping"></i></a></Button>
        </NavbarBs>


    );
}