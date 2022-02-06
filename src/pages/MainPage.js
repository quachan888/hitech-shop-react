import { useEffect, useState } from 'react';
import ProductsList from '../components/ProductsList';
import LoadingSpinner from '../components/LoadingSpinner';
import Hero from '../components/Header/Hero';
import MetaData from '../components/MetaData';

function MainPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch all products data from FakeStoreAPI
        const getData = async () => {
            const data = await fetch('https://fakestoreapi.com/products');
            const json = await data.json();
            setProducts(json);
        };
        getData().catch(console.error);
    }, []);

    if (products) {
        return (
            <>
                <MetaData title={'Best Online Shop For Developers'} />
                <div className="container my-3 rounded">
                    <Hero />
                    <ProductsList products={products} />
                </div>
            </>
        );
    }

    return <LoadingSpinner />;
}

export default MainPage;
