import React from "react";
import { Link } from "react-router-dom";

import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCol,
    MDBCardText,
    MDBRipple,
    MDBBadge,
} from "mdb-react-ui-kit";

export default function ProductCard(props) {
    const { title, price, category, image, id } = props.product;
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
                    <Link to={`/product/${id}`}>
                        <MDBCardImage
                            src={image}
                            alt={title}
                            position="top"
                            className="product-image"
                        />
                    </Link>
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
