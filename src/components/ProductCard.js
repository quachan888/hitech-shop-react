import React from 'react';
import { Link } from 'react-router-dom';

import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCol,
    MDBCardText,
    MDBRipple,
    MDBBadge
} from 'mdb-react-ui-kit';
import { formatter } from '../App';

export default function ProductCard(props) {
    const { title, price, category, image, id } = props.product;
    return (
        <MDBCol>
            <MDBCard className="h-100 py-4 px-1">
                <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay">
                    <MDBBadge pill className="mx-2 mb-4" color="warning">
                        {category[0].toUpperCase()}
                        {category.slice(1)}
                    </MDBBadge>
                    <Link to={`/product/${id}`}>
                        <MDBCardImage src={image} alt={title} position="top" className="product-image p-4 " />
                    </Link>
                    <MDBCardBody>
                        <MDBCardText className="fw-bold fs-5 product-title">{title}</MDBCardText>
                        <MDBCardTitle className="text-dark fs-3">{formatter.format(price)}</MDBCardTitle>
                    </MDBCardBody>
                </MDBRipple>
            </MDBCard>
        </MDBCol>
    );
}
