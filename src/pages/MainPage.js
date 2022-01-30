import { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";
import LoadingSpinner from "../components/LoadingSpinner";

function MainPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    // Fetch all products data from FakeStoreAPI
    async function getData() {
        await fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => setProducts(json));
    }

    if (products) {
        return (
            <div className="container my-5">
                <ProductsList products={products} />
            </div>
        );
    }

    return <LoadingSpinner />;
}

export default MainPage;
