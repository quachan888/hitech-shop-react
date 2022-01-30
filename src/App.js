import "./App.css";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import Header from "./components/Header/Header";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CheckOutPage from "./pages/CheckOutPage";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />

                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/cat/:catName" component={CategoryPage} />
                    <Route
                        path="/product/:productId"
                        component={ProductDetailPage}
                    />
                    <Route exact path="/checkout" component={CheckOutPage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Redirect to="/" />
                </Switch>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
