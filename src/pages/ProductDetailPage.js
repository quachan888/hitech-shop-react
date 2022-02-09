import { MDBBadge } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { MDBInput, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';
import ProductsList from '../components/ProductsList';
import { formatter } from '../App';
import LoadingSpinner from '../components/LoadingSpinner';
import MetaData from '../components/MetaData';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProduct } from '../redux/actions';

function ProductDetailPage() {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.selectedProduct);
    const [productRelated, setProductRelated] = useState([]);
    const { productId } = useParams();

    const fetchProductDetail = async (pid) => {
        const response = await axios.get(`https://fakestoreapi.com/products/${pid}`).catch((err) => console.error(err));
        // fetchProductsSameCategory(response.data);
        dispatch(setSelectedProduct(response.data));
    };

    const fetchProductsSameCategory = async (product) => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/category/${product.category}?limit=4`)
            .catch((err) => console.error(err));
        // console.log('fetchProductsSameCategory', response.data);
        setProductRelated(response.data);
    };

    useEffect(() => {
        fetchProductDetail(productId);
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
                        <img src={product.image} alt={product.title} className="img-fluid" style={{ maxHeight: 300 }} />
                    </div>
                    <div className="col my-5">
                        <MDBBadge color="warning">
                            {product.category[0].toUpperCase() + product.category.slice(1)}
                        </MDBBadge>
                        {bestSellerBadge}
                        <h4 className="my-3">{product.title}</h4>
                        <h2 className="my-3 text-secondary">{formatter.format(product.price)}</h2>
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
                {/* <hr /> */}
                {/* Show related product */}
                {/* <h3 className="text-secondary px-3">Products related to this item</h3>
                <ProductsList products={productRelated} /> */}
            </div>
        );
    }
    return <LoadingSpinner />;
}

export default ProductDetailPage;
