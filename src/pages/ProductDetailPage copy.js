import { MDBBadge } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { MDBInput, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";

function ProductDetailPage() {
    const [product, setProduct] = useState({});

    useEffect(() => {
        getData();
    }, []);

    console.log(product);

    async function getData() {
        fetch("https://fakestoreapi.com/products/1")
            .then((res) => res.json())
            .then((json) => console.log(json));

        await fetch("https://fakestoreapi.com/products/1")
            .then((res) => res.json())
            .then((json) => (product = json));
    }

    console.log(product);
    // async function getProduct() {
    //     await fetch("https://fakestoreapi.com/products/1")
    //         .then((res) => res.json())
    //         .then((json) => setProduct(json));
    // }

    if (product !== {}) {
        console.log(product);
        const bestSellerBadge =
            product.rating.count > 200 ? (
                <MDBBadge className="mx-2" color="danger">
                    Best Seller
                </MDBBadge>
            ) : (
                ""
            );

        return (
            <div className="container bg-light my-4 rounded p-3">
                <div className="row wow fadeIn">
                    <div className="col-md-6 mb-4 p-5 text-center">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="img-fluid"
                            style={{ height: 500 }}
                        />
                    </div>
                    <div className="col-5 my-5">
                        <MDBBadge color="warning">
                            {product.category[0].toUpperCase() +
                                product.category.slice(1)}
                        </MDBBadge>
                        {bestSellerBadge}
                        <h2 className="my-3">${product.price}</h2>
                        <h4 className="text-primary">{product.title}</h4>
                        <div className="row fs-5 my-3 fw-bold">Description</div>
                        <p>
                            {product.description[0].toUpperCase() +
                                product.description.slice(1)}
                        </p>
                        <MDBRow
                            tag="form"
                            className="gy-2 gx-3 align-items-center">
                            <MDBCol size="auto">
                                <MDBInput id="qty" label="Label" />
                            </MDBCol>

                            <MDBCol size="auto">
                                <MDBBtn type="submit">ADD TO CART </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container m-5 p-5 text-center">
            <h1>Product not found!</h1>
        </div>
    );
}

export default ProductDetailPage;
