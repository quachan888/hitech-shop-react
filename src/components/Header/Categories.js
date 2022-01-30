import React, { useState, useEffect } from "react";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBCollapse,
} from "mdb-react-ui-kit";

export default function Categories() {
    const [showBasic, setShowBasic] = useState(false);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, []);

    async function getCategories() {
        const response = await fetch(
            "https://fakestoreapi.com/products/categories",
        );
        const data = await response.json();
        setCategories(data);
    }

    return (
        <MDBNavbar expand="lg" light bgColor="light">
            <MDBContainer className="container">
                <MDBNavbarBrand href="#">Categories: </MDBNavbarBrand>

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
                            <MDBNavbarLink href="/">All</MDBNavbarLink>
                        </MDBNavbarItem>
                        {categories.map((cat, index) => (
                            <MDBNavbarItem key={index}>
                                <MDBNavbarLink href={`/cat/${cat}`}>
                                    {cat[0].toUpperCase() + cat.slice(1)}{" "}
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        ))}
                    </MDBNavbarNav>

                    <form className="d-flex input-group w-auto">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Search..."
                            aria-label="Search"
                        />
                        <MDBBtn>
                            <MDBIcon fas icon="search" />
                        </MDBBtn>
                    </form>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
