import React, { useEffect, useState } from "react";
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBBtn,
    MDBCol,
    MDBCardText,
    MDBRipple,
    MDBCardFooter,
    MDBIcon,
    MDBBadge,
} from "mdb-react-ui-kit";

export default function ProductCard(props) {
    const { id, title, price, category, image } = props.product;
    return (
        <MDBCol>
            <MDBCard className="h-100 py-3 px-1">
                <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image hover-overlay">
                    <MDBBadge pill className="mx-2 mb-4" color="warning">
                        {category[0].toUpperCase()}
                        {category.slice(1)}
                    </MDBBadge>
                    <MDBCardImage
                        src={image}
                        alt={title}
                        position="top"
                        className="product-image"
                    />
                    <MDBCardBody className="text-center">
                        <MDBCardTitle className="text-primary fs-3">
                            ${price}
                        </MDBCardTitle>
                        <MDBCardText className="fw-bold fs-5 product-title">
                            {title}
                        </MDBCardText>
                    </MDBCardBody>
                </MDBRipple>
            </MDBCard>
        </MDBCol>
    );
}
