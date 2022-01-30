import "./App.css";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import Header from "./components/Header/Header";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";

function App() {
    function TestId({ match }) {
        return <h1>ID CAT = {match.params.catName}</h1>;
    }

    return (
        <BrowserRouter>
            <div className="App">
                <Header />

                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/cat/:catName" component={CategoryPage} />

                    <Redirect to="/" />
                </Switch>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
