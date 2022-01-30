import React, { useState } from "react";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBadge,
    MDBCollapse,
} from "mdb-react-ui-kit";

export default function Navbar() {
    const [showBasic, setShowBasic] = useState(false);
    return (
        <MDBNavbar expand="lg" dark bgColor="dark">
            <MDBContainer className="container">
                <MDBNavbarBrand href="/">
                    <MDBIcon fas icon="plug" color="danger" size="lg" />
                    &nbsp; HITECH SHOP
                </MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setShowBasic(!showBasic)}>
                    <MDBIcon icon="bars" fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                        <MDBNavbarItem>
                            <MDBNavbarLink href="#">Contact Us</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href="#">Login</MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>

                    <a href="/checkout">
                        <MDBIcon
                            fas
                            icon="shopping-cart"
                            size="lg"
                            color="white"
                        />
                        <MDBBadge color="danger" notification pill>
                            2
                        </MDBBadge>
                    </a>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
