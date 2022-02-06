import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import MetaData from '../components/MetaData';
import ProductsList from '../components/ProductsList';

function CategoryPage() {
    const [productsByCat, setProducts] = useState([]);
    const { catName } = useParams();
    const catTitle = catName[0].toUpperCase() + catName.slice(1);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://fakestoreapi.com/products/category/${catName}`);
            const json = await data.json();
            setProducts(json);
        };

        fetchData().catch(console.error);
    }, []);

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
