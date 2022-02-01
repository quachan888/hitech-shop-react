import { MDBBadge } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { MDBInput, MDBRow, MDBCol, MDBBtn, MDBSpinner } from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";
import ProductsList from "../components/ProductsList";
import { formatter } from "../App";
import LoadingSpinner from "../components/LoadingSpinner";

function ProductDetailPage() {
    const [product, setProduct] = useState();
    const [productRelated, setProductRelated] = useState([]);

    useEffect(() => {
        getData();
    }, [product]);

    const { productId } = useParams();

    // Fetch  product detail data from FakeStoreAPI
    async function getData() {
        await fetch(`https://fakestoreapi.com/products/${productId}`)
            .then((res) => res.json())
            .then((json) => {
                setProduct(json);

                getProductRelated(json.category);
            });
    }

    async function getProductRelated(catName) {
        await fetch(
            `https://fakestoreapi.com/products/category/${catName}?limit=4`,
        )
            .then((res) => res.json())
            .then((json) => setProductRelated(json));
    }

    if (product) {
        const bestSellerBadge =
            product.rating.count > 250 ? (
                <MDBBadge className="mx-2" color="danger">
                    Best Seller
                </MDBBadge>
            ) : (
                ""
            );
        return (
            <div className="container my-3 bg-white p-3 rounded">
                <div className="row m-3">
                    <div className="col-md-6 mb-4 p-5 text-center">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="img-fluid"
                            style={{ maxHeight: "50" }}
                        />
                    </div>
                    <div className="col my-5">
                        <MDBBadge color="warning">
                            {product.category[0].toUpperCase() +
                                product.category.slice(1)}
                        </MDBBadge>
                        {bestSellerBadge}
                        <h2 className="my-3">
                            {formatter.format(product.price)}
                        </h2>
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
                                <MDBInput id="qty" label="1" />
                            </MDBCol>

                            <MDBCol size="auto">
                                <MDBBtn type="submit">ADD TO CART</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </div>
                </div>
                <hr />
                {/* Show related product */}
                <h3 className="text-secondary px-3">
                    Products related to this item
                </h3>
                <ProductsList products={productRelated} />
            </div>
        );
    }
    return <LoadingSpinner />;
}

export default ProductDetailPage;