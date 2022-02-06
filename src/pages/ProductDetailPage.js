import { MDBBadge } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { MDBInput, MDBRow, MDBCol, MDBBtn, MDBSpinner } from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';
import ProductsList from '../components/ProductsList';
import { formatter } from '../App';
import LoadingSpinner from '../components/LoadingSpinner';
import MetaData from '../components/MetaData';

function ProductDetailPage() {
    const [product, setProduct] = useState();
    const [productRelated, setProductRelated] = useState();
    const { productId } = useParams();

    useEffect(() => {
        // Fetch 1: get product detail
        const fetchData = async () => {
            const product = await fetch(`https://fakestoreapi.com/products/${productId}`);
            const productJSON = await product.json();

            // Fetch 2:  Get related product from this product category
            const relatedProducts = await fetch(
                `https://fakestoreapi.com/products/category/${productJSON.category}?limit=4`
            );
            const products = await relatedProducts.json();
            setProductRelated(products);
            setProduct(productJSON);
        };

        fetchData().catch(console.error);
    }, []);

    if (product) {
        const bestSellerBadge =
            product.rating.count > 250 ? (
                <MDBBadge className="mx-2" color="danger">
                    Best Seller
                </MDBBadge>
            ) : (
                ''
            );
        return (
            <div className="container my-3 bg-white p-3 rounded">
                <MetaData title={`${product.title}`} />
                <div className="row m-3">
                    <div className="col-md-6 mb-4 p-5 text-center">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="img-fluid"
                            style={{ height: 400, maxHeight: '400' }}
                        />
                    </div>
                    <div className="col my-5">
                        <MDBBadge color="warning">
                            {product.category[0].toUpperCase() + product.category.slice(1)}
                        </MDBBadge>
                        {bestSellerBadge}
                        <h2 className="my-3">{formatter.format(product.price)}</h2>
                        <h4 className="text-primary">{product.title}</h4>
                        <div className="row fs-5 my-3 fw-bold">Description</div>
                        <p>{product.description[0].toUpperCase() + product.description.slice(1)}</p>
                        <MDBRow tag="form" className="gy-2 gx-3 align-items-center">
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
                <h3 className="text-secondary px-3">Products related to this item</h3>
                <ProductsList products={productRelated} />
            </div>
        );
    }
    return <LoadingSpinner />;
}

export default ProductDetailPage;
