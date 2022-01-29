import React from "react";
import { MDBRow } from "mdb-react-ui-kit";
import ProductCard from "./ProductCard";

export default function ProductsList(props) {
    return (
        <div className="container my-5">
            <MDBRow className="row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4">
                {props.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </MDBRow>
        </div>
    );
}
