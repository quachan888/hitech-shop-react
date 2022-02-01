import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import MetaData from "../components/MetaData";
import ProductsList from "../components/ProductsList";

function CategoryPage() {
    const [productsByCat, setProducts] = useState([]);

    useEffect(() => {
        getData();
    }, [productsByCat]);

    const { catName } = useParams();

    async function getData() {
        const response = await fetch(
            `https://fakestoreapi.com/products/category/${catName}`,
        );
        const data = await response.json();
        setProducts(data);
    }

    const catTitle = catName[0].toUpperCase() + catName.slice(1);

    if (productsByCat) {
        return (
            <div className="container my-3 rounded">
                <MetaData title={catTitle} />
                {/* <div className="container my-3 bg-light p-3 rounded"></div> */}
                <ProductsList products={productsByCat} />
            </div>
        );
    }

    return <LoadingSpinner />;
}

export default CategoryPage;
