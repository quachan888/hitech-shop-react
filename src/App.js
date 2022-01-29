import "./App.css";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
    }

    return (
        <div className="App">
            <Header />
            <MainPage products={products} />
            <Footer />
        </div>
    );
}

export default App;
